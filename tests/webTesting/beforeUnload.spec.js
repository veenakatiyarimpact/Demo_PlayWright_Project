import { test } from '@playwright/test';

const url = "https://the-internet.herokuapp.com/javascript_alerts"

// Alert pop-up
test('Handle Alert', async ({ page }) => {

  await page.goto(url);

  page.on('dialog', async (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    await dialog.accept();
});

  await page.getByText('Click for JS Alert').click();
});