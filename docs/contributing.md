# Contributing Guide

## Branching Strategy

```
main          ← production-ready workflows only
dev           ← integration branch (default PR target)
feature/xxx   ← your working branch
```

### Branch naming
```
feature/<your-name>-<description>
fix/<your-name>-<description>

Examples:
feature/priya-add-blog-scraper
fix/alice-schedule-trigger-timing
```

---

## Day-to-Day Workflow

### Start of day
```bash
git checkout dev
git pull origin dev
git checkout -b feature/yourname-description
```

### After editing a workflow in n8n
1. In n8n: **⋮ menu → Download** → save the `.json`
2. Replace `workflows/<folder>/workflow.json` with the downloaded file
3. Update the workflow `README.md` if anything changed

### Commit & push
```bash
git add workflows/vosyn-website-scraper/workflow.json
git commit -m "feat(vosyn-scraper): describe what you changed"
git push origin feature/yourname-description
```

### Open a Pull Request
- PR from your branch → **target: `dev`** (never directly to `main`)
- Get at least **1 teammate to review**
- Do not merge your own PR

---

## Commit Message Format
```
feat(scope): add new thing
fix(scope): fix broken thing
docs(scope): update readme
refactor(scope): restructure code

Examples:
feat(vosyn-scraper): add retry logic to HTTP node
fix(schedule-trigger): correct timezone setting
docs(setup): add Docker instructions
```

---

## Avoiding Conflicts

Workflows are JSON — two people editing the same file = conflict.

- **One owner per workflow** — listed in each workflow's README.md
- Coordinate with the owner before editing their workflow
- When unsure, create a new workflow and link it

---

## Adding a New Workflow

1. Create folder: `workflows/<your-workflow-name>/`
2. Add `workflow.json` (exported from n8n)
3. Add `README.md` (copy from another workflow folder)
4. Add a row to the table in the root `README.md`
5. Open PR to `dev`
