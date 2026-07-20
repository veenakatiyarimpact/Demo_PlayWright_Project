import { test , expect} from '@playwright/test';


test('page fixture test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});