import { test, expect, request } from '@playwright/test';


// Create session storage file 
test.beforeAll(async ({ browser }) => {
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("veena.katiyar@gmail.com");
   await page.locator("#userPassword").fill("Ashlesha@128");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');

  const sessionStorage = await context.storageState({ path: 'state.json' });
});



 
// Login automatically using token
test('@API Login automatically', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'state.json' });
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/client');
});