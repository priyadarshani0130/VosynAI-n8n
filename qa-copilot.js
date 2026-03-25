/**
 * AI-Powered QA Monitoring Copilot Workflow
 * 
 * DESIGN REQUIREMENTS:
 * - Uses clear "node" function names
 * - Production-ready structure with error handling
 * - Easy to extend
 */

require('dotenv').config();
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

// For AI, we'll use a generic fetch to an LLM provider (e.g., OpenAI). 
// You can swap this for Gemini, Anthropic, or any local LLM.
const { OpenAI } = require('openai'); 

const SNAPSHOT_FILE = path.join(__dirname, 'qa_snapshot.json');
const SHEET_ID = '1ILlZ8C_laVojfrJ_GTWZM10Wprw9WCdJuClSVadU_kM';
const RANGE = 'Sheet1'; // Adjust if your tab name is different
const NOTIFY_EMAIL = 'aquariustestautomation@gmail.com';

// Setup OpenAI Client (with dummy key fallback to prevent crash on init)
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || 'dummy_key' });

// Setup Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});

// Setup Google Sheets auth (requires a service account)
const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_SERVICE_KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});
const sheets = google.sheets({ version: 'v4', auth });

/**
 * ==========================================
 * NODE 1: Schedule Trigger
 * ==========================================
 * Runs twice daily (e.g., 09:00 AM and 05:00 PM)
 * Schedule is configurable via CRON syntax.
 */
function initializeTrigger() {
    console.log('[Node 1] Registering Schedule Trigger for Morning (09:00) and Evening (17:00)');
    cron.schedule('0 9,17 * * *', async () => {
        console.log('\n--- Starting QA Copilot Workflow ---');
        await executeWorkflow();
    });
}

/**
 * ==========================================
 * NODE 2: Google Sheets Read
 * ==========================================
 */
async function fetchGoogleSheetData() {
    console.log('[Node 2] Reading Google Sheets data...');
    if (!process.env.GOOGLE_SERVICE_KEY_PATH) {
        console.log('  -> [DEBUG] No Google Service Key found. Returning mock sheet data.');
        return [
            ['id', 'severity', 'priority', 'status', 'module', 'owner', 'comments'],
            ['BUG-101', 'Critical', 'P0', 'Open', 'Auth/Login', 'QA Team', 'Authentication fails for returning users'],
            ['BUG-102', 'Low', 'P3', 'Resolved', 'Footer', 'Dev Team', 'Fix typo in copyright year']
        ];
    }
    const response = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: RANGE });
    const rows = response.data.values;
    if (!rows || rows.length === 0) throw new Error('No data found in Google Sheet.');
    return rows;
}

/**
 * ==========================================
 * NODE 3: Data Normalization
 * ==========================================
 * Dynamically maps columns to JSON objects using the header row.
 */
function normalizeData(rawRows) {
    console.log('[Node 3] Normalizing raw sheet data...');
    const headers = rawRows[0].map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));
    const records = [];

    for (let i = 1; i < rawRows.length; i++) {
        const row = rawRows[i];
        const record = { _row_index: i + 1 }; // keep track of row number
        
        headers.forEach((header, index) => {
            let val = row[index] ? row[index].trim() : '';
            record[header] = val;
        });
        
        // Ensure standard keys exist to prevent undefined errors
        const coreKeys = ['id', 'severity', 'priority', 'status', 'module', 'owner', 'comments'];
        coreKeys.forEach(k => { if (!record[k]) record[k] = ''; });

        records.push(record);
    }
    return records;
}

/**
 * ==========================================
 * NODE 4: Compare with Previous Snapshot
 * ==========================================
 */
function detectChanges(currentData) {
    console.log('[Node 4] Comparing with previous snapshot...');
    let previousData = [];
    if (fs.existsSync(SNAPSHOT_FILE)) {
        previousData = JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf-8'));
    }

    const prevMap = new Map(previousData.map(item => [item.id || item._row_index, item]));
    const changes = [];

    for (const currentRow of currentData) {
        const prevRow = prevMap.get(currentRow.id || currentRow._row_index);
        
        if (!prevRow) {
            changes.push({ type: 'NEW', row: currentRow });
        } else {
            // Check for updates
            const diffs = {};
            let hasChanged = false;
            for (const key of Object.keys(currentRow)) {
                if (key === '_row_index') continue;
                if (currentRow[key] !== prevRow[key]) {
                    diffs[key] = { old: prevRow[key], new: currentRow[key] };
                    hasChanged = true;
                }
            }
            if (hasChanged) {
                changes.push({ type: 'UPDATED', row: currentRow, diffs });
            }
        }
    }
    return changes;
}

/**
 * ==========================================
 * NODE 5: Risk Identification Logic
 * ==========================================
 */
function identifyRisks(changes) {
    console.log('[Node 5] Evaluating risk levels...');
    const highRiskKeywords = ['login', 'auth', 'dashboard', 'payment', 'integration', 'user management'];
    
    changes.forEach(change => {
        const r = change.row;
        let isHighRisk = false;
        
        const severity = r.severity.toLowerCase();
        const priority = r.priority.toLowerCase();
        const status = r.status.toLowerCase();
        const module = r.module ? r.module.toLowerCase() : '';

        if (severity.includes('critical') || severity.includes('blocker') || severity.includes('high')) isHighRisk = true;
        if (priority.includes('p0') || priority.includes('p1')) isHighRisk = true;
        if (status.includes('reopened') || status.includes('blocked') || status.includes('failed')) isHighRisk = true;
        
        if (highRiskKeywords.some(kw => module.includes(kw))) isHighRisk = true;
        
        change.isHighRisk = isHighRisk;
    });

    return changes;
}

/**
 * ==========================================
 * NODE 6: AI Analysis
 * ==========================================
 */
async function analyzeWithAI(changes) {
    console.log('[Node 6] Running AI Analysis on changed rows...');
    
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'sk-your-openai-api-key') {
        console.log('  -> [DEBUG] No valid OpenAI API Key found. Returning mock AI analysis.');
        return "1. Executive Summary\nDetected 2 mocked changes in the tracker.\n\n2. Most Important High-Risk Bugs\n- BUG-101: Critical authentication failure for returning users (P0).\n\n3. Major System or Function Changes\nAuth/Login module is currently unstable.\n\n4. Recommended QA Focus\nHotfix verification on the Login flow immediately.\n\n5. Items Requiring Manual Review\nVerify typographical fix on Footer copyright.";
    }

    const promptData = changes.map(c => JSON.stringify(c)).join('\n');

    const systemPrompt = `You are a senior QA risk analyst and QA operations copilot.
Your task is to analyze updates in a QA bug tracking sheet and produce a concise, risk-based report.
Focus on: high-risk bugs, major system or function changes, regressions and blockers, business impact.

Rules:
- Do not invent missing data
- Clearly label assumptions
- Be concise and operational
- Prioritize critical issues

Return output in this exact structure:
1. Executive Summary
2. Most Important High-Risk Bugs
3. Major System or Function Changes
4. Status Changes
5. Reopened / Escalated Issues
6. Recommended QA Focus
7. Items Requiring Manual Review
`;

    const userPrompt = `Analyze the following changed rows:\n${promptData}\n\nIdentify high-risk issues, system/function changes, regressions, and priority actions.`;

    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
        ],
        temperature: 0.2
    });

    return response.choices[0].message.content;
}

/**
 * ==========================================
 * NODE 7: Send Email output
 * ==========================================
 */
async function sendEmailReport(aiOutput) {
    console.log('[Node 7] Sending report via email...');
    if (!process.env.EMAIL_APP_PASSWORD) {
        console.log('  -> [DEBUG] No Email App Password found. Printing payload to console instead:');
        console.log('\n================ EMAIL PAYLOAD ================');
        console.log(`To: ${NOTIFY_EMAIL}`);
        console.log(`Subject: [QA Copilot] Change Report – High-Risk Bugs & System Updates`);
        console.log(`\nHello,\n\nHere is your QA change report:\n\n${aiOutput}\n\nRegards,\nQA Copilot`);
        console.log('===============================================\n');
        return;
    }
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: NOTIFY_EMAIL,
        subject: '[QA Copilot] Change Report – High-Risk Bugs & System Updates',
        text: `Hello,\n\nHere is your QA change report:\n\n${aiOutput}\n\nRegards,\nQA Copilot`
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent to ${NOTIFY_EMAIL}`);
}

/**
 * ==========================================
 * NODE 8: Save Snapshot
 * ==========================================
 */
function saveSnapshot(data) {
    console.log('[Node 8] Saving data snapshot for next run...');
    fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(data, null, 2));
}

/**
 * MAIN WORKFLOW ORCHESTRATOR
 * Also contains Error Handling (Node 9)
 */
async function executeWorkflow() {
    try {
        const rawData = await fetchGoogleSheetData();
        const normalizedData = normalizeData(rawData);
        
        const changes = detectChanges(normalizedData);
        if (changes.length === 0) {
            console.log('[Duplicate Protection] No changes detected. Skipping AI analysis and email.');
            saveSnapshot(normalizedData);
            return;
        }

        console.log(`Detected ${changes.length} change(s).`);
        const riskEvaluatedChanges = identifyRisks(changes);
        
        const aiAnalysisResult = await analyzeWithAI(riskEvaluatedChanges);
        
        await sendEmailReport(aiAnalysisResult);
        
        saveSnapshot(normalizedData);
        console.log('Workflow execution complete!');

    } catch (error) {
        console.error('[Error Handling] Workflow failed:', error.message);
        
        // Error handling fallback: Notify admin of script failure
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: NOTIFY_EMAIL,
                subject: '[QA Copilot - ALERT] Workflow Execution Failed',
                text: `The QA Monitoring Copilot encountered an error during its scheduled run:\n\n${error.stack}`
            });
        } catch (mailError) {
            console.error('Failed to send error notification email:', mailError.message);
        }
    }
}

// Check if running directly to test immediately, otherwise start trigger.
if (require.main === module) {
    console.log('Running manual test execution...');
    executeWorkflow(); 
    initializeTrigger();
}

module.exports = { executeWorkflow, initializeTrigger };
