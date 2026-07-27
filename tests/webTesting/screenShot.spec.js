import { test , expect} from '@playwright/test';


test('Take_Screenshot', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("veena.katiyar@gmail.com");
  await page.locator("#userPassword").fill("Ashlesha@128");

  await page.locator("#login").screenshot({path: 'vk2.jpg'});
  await page.locator("#login").click();
  await page.screenshot({path:'vk1.jpg'});
});