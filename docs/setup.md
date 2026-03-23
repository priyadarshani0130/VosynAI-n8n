# Setup Guide

## 1. Install n8n

### Option A — npx (quickest, no install)
```bash
npx n8n
# Opens at http://localhost:5678
```

### Option B — Global install
```bash
npm install -g n8n
n8n start
```

### Option C — Docker
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

---

## 2. Clone the repo
```bash
git clone https://github.com/priyadarshani0130/VosynAI-n8n.git
cd VosynAI-n8n
cp .env.example .env
# fill in your values in .env
```

---

## 3. Import a workflow

### Via n8n UI
1. Open n8n at `http://localhost:5678`
2. **Workflows → Add workflow → ⋮ → Import from file**
3. Select `workflows/vosyn-website-scraper/workflow.json`

### Via CLI
```bash
bash scripts/import_workflow.sh workflows/vosyn-website-scraper/workflow.json
```

---

## 4. Add credentials in n8n

Go to **Settings → Credentials → Add credential** for each item in [credentials.md](credentials.md).

---

## 5. Test
1. Open the imported workflow
2. Click **Execute Workflow**
3. Check Google Sheets for new rows

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| n8n won't start | Check Node.js version: `node -v` (needs 18+) |
| Google Sheets auth fails | Re-authenticate the Google credential in n8n |
| OpenAI errors | Check your API key has credits |
| Workflow not importing | Run `bash scripts/import_workflow.sh --validate <file>` |
