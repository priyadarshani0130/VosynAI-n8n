# Workflow: Vosyn Website Scraper

## What It Does
Scrapes [vosyn.ai](https://vosyn.ai), uses OpenAI to extract structured content from the HTML, then appends results to a Google Sheet.

## Flow
```
[Manual Trigger / Schedule Trigger]
        ↓
[HTTP Request] — GET https://www.vosyn.ai/
        ↓
[HTML node] — extractHtmlContent
        ↓
[Message a Model (OpenAI)] — extracts structured data
        ↓
[Code in JavaScript] — formats/transforms AI response
        ↓
[Append or Update Row — Sheet1] — writes to Google Sheets
```

## Triggers
| Trigger | Description |
|---------|-------------|
| Manual | Run on-demand from n8n UI |
| Schedule | Runs on set interval (configure in the node) |

## Credentials Needed
| Credential | n8n Type | Node |
|------------|----------|------|
| OpenAI API Key | OpenAI API | Message a model |
| Google Account | Google OAuth2 | Append or update row |

## Setup
1. Import `workflow.json` into n8n
2. Open **Message a model** node → connect your OpenAI credential
3. Open **Append or update row** node → connect Google credential → select your Sheet
4. Set Schedule Trigger interval as needed
5. Click **Execute Workflow** to test

## Owner
@priyadarshani0130

## Last Updated
2025-03
