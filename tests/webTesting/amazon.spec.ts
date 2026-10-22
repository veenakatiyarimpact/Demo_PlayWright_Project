
import {test,expect} from '@playwright/test';

test('Amazon Search Test', async ({ page }) => {
    await page.goto("https://www.flipkart.com");
    await page.alert.dismiss();
    await page.pause();
    await page.locator('[name="q"]').fill("laptops");
    let price = await page.locator(".lvJbLV col-12-12").locator(".hZ3P6w DeU9vF").allTextContents();

    let no =0;
    for (let i = 0 ; i< price.length;  i++){
        let p = price[i];
       console.log(p)

    }
    
    // await page
});