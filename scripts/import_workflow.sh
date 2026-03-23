#!/bin/bash
# import_workflow.sh — validate or import an n8n workflow JSON

set -e

VALIDATE_ONLY=false
WORKFLOW_FILE=""

for arg in "$@"; do
  if [ "$arg" == "--validate" ]; then
    VALIDATE_ONLY=true
  else
    WORKFLOW_FILE="$arg"
  fi
done

if [ -z "$WORKFLOW_FILE" ]; then
  echo "Usage: bash scripts/import_workflow.sh [--validate] <path-to-workflow.json>"
  exit 1
fi

if [ ! -f "$WORKFLOW_FILE" ]; then
  echo "❌ File not found: $WORKFLOW_FILE"
  exit 1
fi

echo "🔍 Validating: $WORKFLOW_FILE"
if python3 -c "import json, sys; json.load(open('$WORKFLOW_FILE'))" 2>/dev/null; then
  echo "✅ JSON is valid"
else
  echo "❌ Invalid JSON in $WORKFLOW_FILE"
  exit 1
fi

if [ "$VALIDATE_ONLY" = true ]; then
  echo "Validation complete."
  exit 0
fi

N8N_HOST="${N8N_HOST:-http://localhost:5678}"
echo "📤 Importing to n8n at $N8N_HOST..."

if command -v n8n &>/dev/null; then
  n8n import:workflow --input="$WORKFLOW_FILE"
  echo "✅ Imported successfully!"
else
  echo "⚠️  n8n CLI not found. Import manually:"
  echo "   n8n UI → Workflows → ⋮ → Import from file → $WORKFLOW_FILE"
fi
