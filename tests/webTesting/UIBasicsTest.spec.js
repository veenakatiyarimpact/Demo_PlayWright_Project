import { test, expect } from '@playwright/test';


test('UI Basics Test', async ({ page ,browserName}) => {
   if (browserName === 'firefox') {
        console.log('Running in Firefox');
    }else if (browserName === 'chromium') {
        console.log('Running in chromium');
    }
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('RS', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("veena.katiyar@gmail.com");
  await page.locator("#userPassword").fill("Ashlesha@128");
  await page.locator("#login").click();
});


test('Login_Error', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill("rahulshettyacademy1");

  await page.locator("#password").fill("Learning@830$3mK2");
  // await page.locator(".customradio").click();
  // await page.selectOption(".form-control","Student");
  await page.locator("#terms").check();
  await page.locator("#signInBtn").click();
  let errMsg = await page.locator("[style*='block']").textContent();
  console.log(errMsg);
  await expect (page.locator("[style*='block']")).toHaveText("Incorrect username/password.");
});

test('Login_Success', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill("rahulshettyacademy");

  await page.locator("#password").fill("Learning@830$3mK2");
  await page.locator("#terms").check();
  await page.locator("#signInBtn").click();
  await page.locator(".nav-link.btn.btn-primary").click();
});