const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/DDEV Playwright Tests/);
});

test('has ngrok url', async ({page, baseURL}) => {
  await page.goto('/');
  console.log(baseURL)
  await expect(page).toHaveURL(baseURL);
});
