import { test, expect } from '@playwright/test';


test('frameHandling', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  
  const frame1 = page.frameLocator("#courses-iframe");
  await frame1.locator("li a[href*='lifetime-access']:visible").click();
  const msg = await frame1.locator("div h2").first().innerText();
  const total = msg.split(" ")
  console.log(total[1]);
});
