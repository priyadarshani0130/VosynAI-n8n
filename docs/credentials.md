# Credentials Reference

Never store real keys here. This file only documents what's needed and where to get it.

---

## Required Credentials

### 1. OpenAI API
- **Used in:** `vosyn-website-scraper` → "Message a model" node
- **n8n type:** OpenAI API
- **Get it:** https://platform.openai.com/api-keys
- **Env var:** `OPENAI_API_KEY`

### 2. Google OAuth2 (Sheets)
- **Used in:** `vosyn-website-scraper` → "Append or update row" node
- **n8n type:** Google OAuth2 API
- **Get it:** https://console.cloud.google.com → APIs & Services → Credentials
- **Env vars:** `GOOGLE_SHEETS_CLIENT_ID`, `GOOGLE_SHEETS_CLIENT_SECRET`
- **Scopes needed:** `https://www.googleapis.com/auth/spreadsheets`

---

## How to add a credential in n8n
1. **Settings → Credentials → + Add Credential**
2. Search for the type (e.g. "OpenAI")
3. Paste your key → Save (n8n encrypts it automatically)

---

## Adding new credentials
When you add a workflow that needs new credentials, update this file with the credential name, type, which node uses it, and where to get it.
