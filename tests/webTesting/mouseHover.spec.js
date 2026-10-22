import { test, expect } from '@playwright/test';


test('@Sanity mouseHover', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  
  await page.locator("#mousehover").hover();
  await page.getByText("Top").click();
});
