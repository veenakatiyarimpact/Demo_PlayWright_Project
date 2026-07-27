import { test, expect } from '@playwright/test';


test('visualComparision', async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.pause()
  
  expect(await page.screenshot()).toMatchSnapshot({path:'login.jpg'});
});