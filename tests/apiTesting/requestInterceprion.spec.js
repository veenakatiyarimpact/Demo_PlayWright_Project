import { test, expect } from '@playwright/test';

test('Request interception', async ({ page }) => {

    // Login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill("veena.katiyar@gmail.com");
    await page.locator("#userPassword").fill("Ashlesha@128");
    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkidle');

    await page.locator(".card-body b").first().waitFor();
    await page.locator("button[routerlink*='myorders']").click();

    // Intercept the order-details API request, it's having invalid order id. Request interception used "route.continue"
    await page.route(
        "**/api/ecom/order/get-orders-details?id=*",
        route => route.continue({
            url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6"
        })
    );

    // Click View
    await page.locator("button:has-text('View')").first().click();

    // Verify unauthorized response
    await expect(page.locator("p").last())
        .toHaveText("You are not authorize to view this order");
});