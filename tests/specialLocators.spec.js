import { test, expect } from '@playwright/test';

test('Special_Locators', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.locator("input").first().fill("Veena Katiyar");

  await page.locator("[name='email']").fill("veena.katiyar.impact@gmail.com");
  await page.getByPlaceholder("Password").fill("Ashlesha@128");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByLabel("Employed").click();
  await page.getByRole("button",{value:'Submit'}).click();

  // Step level timeout overriding
  await expect (page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:10_000});// 10_000 is same as 10000
  await page.getByRole('Link',{name:'Shop'}).click();
  await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole('button').click();
  await page.pause();
});