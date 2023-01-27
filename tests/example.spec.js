const { test, expect } = require('@playwright/test');

test('has title', async ({ page, baseURL }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/DDEV Playwright Tests/);
  await expect(page).toHaveURL(baseURL);
});
