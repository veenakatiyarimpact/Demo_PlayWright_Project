import { test, expect } from '@playwright/test';


test('visualComparision-Fail', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  
  expect(await page.screenshot()).toMatchSnapshot({path:'login.jpg'});
});

test('visualComparision-Pass', async({page})=>{
  await page.goto("https://crosslaketech.com/insights/");
  
  expect(await page.screenshot()).toMatchSnapshot({path:'robot-framework.jpg'});
});