import { test , expect} from '@playwright/test';


test('@Sanity page fixture test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});