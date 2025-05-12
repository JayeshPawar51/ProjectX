# 1. Install Playwright and required browsers
npx playwright install

# 2. Run all Playwright tests
npx playwright test

# 3. Run tests in a specific file
npx playwright test tests/example.spec.ts

# 4. Run a specific test by name (title)
npx playwright test -g "test name"

# 5. Run tests in headed mode (UI visible)
npx playwright test --headed

# 6. Run tests in a specific browser (chromium, firefox, webkit)
npx playwright test --project=chromium

# 7. Run tests with debug info (useful for troubleshooting)
npx playwright test --debug

# 8. Run a single test in debug mode with Playwright Inspector
npx playwright test tests/example.spec.ts --debug

# 9. Run tests with slow motion (helps visualize execution)
npx playwright test --project=chromium --headed --slow-mo=1000

# 10. Update all screenshots, snapshots, and traces
npx playwright test --update-snapshots

# 11. Generate HTML report
npx playwright show-report

# 12. Run tests with a custom config file
npx playwright test --config=custom.config.ts

# 13. Run tests only for changed files (Git diff)
npx playwright test --only-changed

# 14. Record a new test script using Codegen
npx playwright codegen https://example.com

# 15. List all registered projects (browsers/devices)
npx playwright test --list

# 16. Run tests in parallel (default behavior, but can control via config)
npx playwright test --workers=4
