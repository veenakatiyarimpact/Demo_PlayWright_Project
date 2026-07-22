import { test, expect } from '@playwright/test';


test('mouseHover', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  
  await page.locator("#mousehover").hover();
  await page.getByText("Top").click();
});
