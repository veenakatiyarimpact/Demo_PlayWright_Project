import { test, expect } from '@playwright/test';


test('Two users chatting', async ({ browser }) => {

    const user1 = await browser.newContext();
    const user2 = await browser.newContext();

    try {
        const page1 = await user1.newPage();
        const page2 = await user2.newPage();

        // Navigate to both pages in parallel
        await Promise.all([
            page1.goto('https://playwright.dev/'),
            page2.goto('https://google.com/'),
        ]);

        await expect(page1).toHaveURL(/playwright/);
        await expect(page2).toHaveURL(/google/);
    } finally {
        await user1.close();
        await user2.close();
    }
});