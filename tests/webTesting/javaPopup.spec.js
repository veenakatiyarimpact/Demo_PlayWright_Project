import { test, expect } from '@playwright/test';


test('Popup Validation', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
});