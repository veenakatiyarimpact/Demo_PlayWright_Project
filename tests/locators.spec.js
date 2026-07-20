import { test, expect } from '@playwright/test';

test('Find_Product', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill("rahulshettyacademy");

  await page.locator("#password").fill("Learning@830$3mK2");
  await page.locator("#terms").check();
  await page.locator("#signInBtn").click();
  console.log(await page.locator(".card-body a").first().textContent());
  console.log(await page.locator(".card-body a").last().textContent());
  console.log(await page.locator(".card-body a").nth(2).textContent());
  console.log("============================================================");

  console.log(await page.locator(".card-body a").allTextContents());
  await page.locator(".nav-link.btn.btn-primary").click();
});


test('Sign_In', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  // Registering a new user
  await page.getByText("Register here").click();
  await page.locator("#firstName").fill("Veena");
  await page.locator("#lastName").fill("Katiyar");
  await page.locator("#userEmail").fill("veena.katiyar13@gmail.com");
  await page.locator("#userMobile").fill("9987056745");
  await page.selectOption("select","Engineer");
  await page.getByText("Female").click();
  await page.locator("#userPassword").fill("Ashlesha@128");
  await page.locator("#confirmPassword").fill("Ashlesha@128");
  await page.locator(".ng-pristine").click();
  await page.pause()
  await page.locator("[type='checkbox']").click();
  await page.pause()
  await page.locator("#login").click();
  await page.waitForLoadState('networkidle');
  

  // Login with the registered user
  await page.getByText("Login").click();
  await page.locator("#userEmail").fill("veena.katiyar13@gmail.com");
  await page.locator("#userPassword").fill("Ashlesha@128");  
  
  await page.locator("#login").click();
  const prodTitles = await page.locator(".card-body b").allTextContents();
  console.log(prodTitles);
  
});