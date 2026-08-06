import { test, expect } from '@playwright/test';
import testdata from '../../TestData/findProductTestData.json' with { type: 'json' };

test('Read data from JSon', async({page})=>{
  for (let i = 0; i < testdata.length; i++) {
    const userData = testdata[i];
    console.log(userData.url);
    console.log(userData.username);
    console.log(userData.password);
  }
});