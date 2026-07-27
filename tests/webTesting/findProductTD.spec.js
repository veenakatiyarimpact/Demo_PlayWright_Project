import { test, expect } from '@playwright/test';
import testdata from '../../TestData/findProductTestData.json' with { type: 'json' };

test('loginTest', async({page})=>{
  for (let i = 0; i < testdata.length; i++) {
    const userData = testdata[i];
    await page.goto(userData.url);
    await page.locator("#username").fill(userData.username);
    await page.locator("#password").fill(userData.password);
  }
});