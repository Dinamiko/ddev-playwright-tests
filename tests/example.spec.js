const { test, expect } = require('@playwright/test');

test('has title', async ({ page, baseURL }) => {
  await page.goto(baseURL);
  await expect(page).toHaveTitle(/DDEV Playwright Tests/);
});
