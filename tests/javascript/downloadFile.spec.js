import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Download and validate file', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download');

    // Wait for download and click button
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ]);

    // Save downloaded file
    await download.saveAs('downloadedFile.jpeg');

    // Validate file exists
    expect(fs.existsSync('downloadedFile.jpeg')).toBeTruthy();

    // Validate file size
    expect(fs.statSync('downloadedFile.jpeg').size).toBeGreaterThan(0);

});