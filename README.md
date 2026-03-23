# VosynAI-n8n

> n8n workflow automation for [vosyn.ai](https://vosyn.ai).  
> Sister repo to [VosynSW/VosynAI](https://github.com/VosynSW/VosynAI) (Python automation).

---

## 📁 Structure

```
VosynAI-n8n/
├── workflows/
│   └── vosyn-website-scraper/
│       ├── workflow.json       ← export from n8n and replace this
│       └── README.md
├── docs/
│   ├── setup.md
│   ├── contributing.md
│   └── credentials.md
├── scripts/
│   └── import_workflow.sh
├── .env.example
└── .github/
    ├── ISSUE_TEMPLATE/
    └── workflows/validate-json.yml
```

---

## 🚀 Workflows

| Workflow | Description | Trigger | Status |
|----------|-------------|---------|--------|
| [vosyn-website-scraper](workflows/vosyn-website-scraper/) | Scrapes vosyn.ai → AI extracts content → saves to Google Sheets | Manual + Schedule | ✅ Active |

---

## ⚡ Quick Start

### 1. Clone
```bash
git clone https://github.com/priyadarshani0130/VosynAI-n8n.git
cd VosynAI-n8n
```

### 2. Install n8n
```bash
npx n8n
# opens at http://localhost:5678
```

### 3. Import workflow
```
n8n UI → Workflows → Add workflow → ⋮ → Import from file
→ select workflows/vosyn-website-scraper/workflow.json
```

### 4. Add credentials in n8n
See [docs/credentials.md](docs/credentials.md) — add OpenAI + Google Sheets credentials inside n8n.

---

## 👥 Team Git Flow

```
main          ← stable only
dev           ← merge PRs here first  
feature/xxx   ← your personal branch
```

**Every time you edit a workflow in n8n:**
1. `⋮ menu → Download` → saves `workflow.json`
2. Replace `workflows/vosyn-website-scraper/workflow.json`
3. Commit + push → open PR to `dev`

See [docs/contributing.md](docs/contributing.md) for full details.

---

## 🔐 Credentials

Never commit API keys. See [docs/credentials.md](docs/credentials.md) and [`.env.example`](.env.example).

---

## 🔗 Related Repos

| Repo | Stack | Purpose |
|------|-------|---------|
| [VosynSW/VosynAI](https://github.com/VosynSW/VosynAI) | Python | Main automation |
| [priyadarshani0130/VosynAI-n8n](https://github.com/priyadarshani0130/VosynAI-n8n) | n8n | This repo |
