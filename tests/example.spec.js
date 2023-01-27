const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://ddev-playwright-tests.ddev.site');
  await expect(page).toHaveTitle(/DDEV Playwright Tests/);
});
