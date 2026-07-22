import { test, expect } from '@playwright/test';



test('browser fixture test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://google.dev/');
  await expect(page).toHaveTitle(/Google/);
  await context.close(); 
});