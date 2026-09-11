#!/bin/bash
# Lint UI files for anti-patterns: hardcoded colors, color-mix in JSX, gradients
# Run: bash scripts/lint-ui.sh

set -e
FAIL=0

echo "=== UI Anti-Pattern Lint ==="

# 1. color-mix() in TSX files
MATCHES=$(grep -rn "color-mix" src/routes/ src/components/ 2>/dev/null | grep -v node_modules | grep "\.tsx:" || true)
if [ -n "$MATCHES" ]; then
  echo "❌ color-mix() found in TSX (use CSS variables instead):"
  echo "$MATCHES"
  FAIL=1
fi

# 2. Hardcoded hex colors in className
MATCHES=$(grep -rn 'className=.*#[0-9a-fA-F]\{3,8\}' src/routes/ src/components/ 2>/dev/null | grep -v node_modules | grep "\.tsx:" || true)
if [ -n "$MATCHES" ]; then
  echo "❌ Hardcoded hex colors in className:"
  echo "$MATCHES"
  FAIL=1
fi

# 3. linear-gradient in TSX
MATCHES=$(grep -rn "linear-gradient" src/routes/ src/components/ 2>/dev/null | grep -v node_modules | grep "\.tsx:" || true)
if [ -n "$MATCHES" ]; then
  echo "❌ Gradients found in TSX (use solid colors):"
  echo "$MATCHES"
  FAIL=1
fi

# 4. lucide-react imports (should be @sketchyicons/react)
MATCHES=$(grep -rn "from 'lucide-react'" src/ 2>/dev/null | grep -v node_modules || true)
if [ -n "$MATCHES" ]; then
  echo "❌ lucide-react imports (use @sketchyicons/react):"
  echo "$MATCHES"
  FAIL=1
fi

# 5. rgba() in TSX className (should be CSS variables)
MATCHES=$(grep -rn 'className=.*rgba(' src/routes/ src/components/ 2>/dev/null | grep -v node_modules | grep "\.tsx:" || true)
if [ -n "$MATCHES" ]; then
  echo "❌ rgba() in className (define as CSS variable instead):"
  echo "$MATCHES"
  FAIL=1
fi

# 6. Global element selectors in styles.css that conflict with Tailwind
MATCHES=$(grep -n '^[a-z].*{' src/styles.css 2>/dev/null | grep -v "^.*\*\|^.*:root\|^.*html\|^.*body\|^.*@\|^.*\/\/" || true)
if [ -n "$MATCHES" ]; then
  echo "❌ Global element selectors in styles.css (will conflict with Tailwind/asChild):"
  echo "$MATCHES"
  FAIL=1
fi

# 7. !important in TSX (cascade is wrong if you need it)
MATCHES=$(grep -rn '!important\|![a-z]' src/components/ src/routes/ 2>/dev/null | grep "\.tsx:" | grep -v node_modules | grep "!" || true)
if echo "$MATCHES" | grep -q '!text-\|!bg-\|!border-\|!important'; then
  echo "❌ !important found in TSX (fix the cascade instead):"
  echo "$MATCHES"
  FAIL=1
fi

if [ $FAIL -eq 0 ]; then
  echo "✅ All checks passed"
fi

exit $FAIL
