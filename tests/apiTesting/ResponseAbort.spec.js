import { test, expect, request } from '@playwright/test';
import { APIUtils } from './utils/APIUtils.js';


// Create new order without response interception
test('Response abort', async ({ page }) => {
    const username = "rahulshettyacademy";
    const password = "Learning@830$3mK2";

    // Block the response of *.css requests
    await page.route('**/*.css', route => route.abort());

    // Print all response url and response status
    page.on('response', response => {
        console.log("Response => " + response.url(), response.status(),"\n\n");
    });

    // Do not load any images
    await page.route('**/*.{jpg,jpeg,png}', route => route.abort());

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // Login with the registered user
    await page.locator("#username").fill(username);
    await page.locator("#password").fill(password);
    await page.locator("#terms").check();

    await page.locator("#signInBtn").click();
});