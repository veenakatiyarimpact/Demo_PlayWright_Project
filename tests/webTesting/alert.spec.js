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


// Confirm pop-up : Accept
test('Handle Confirm OK', async ({ page }) => {

  await page.goto(url);

  page.on('dialog', async (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    await dialog.accept();
});

  await page.getByText('Click for JS Confirm').click();
});

// Confirm pop-up : Dismiss
test('Handle Confirm Cancel', async ({ page }) => {

  await page.goto(url);

  page.on('dialog', async (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    await dialog.dismiss();
});

  await page.getByText('Click for JS Confirm').click();
});


// Prompt pop-up : OK
test('Handle Prompt Ok', async ({ page }) => {

  await page.goto(url); 
  page.on('dialog', async (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    dialog.type("Veena")
    await dialog.accept();
});

  await page.getByText('Click for JS Prompt').click();
});

// Prompt pop-up : Cancel
test('Handle Prompt Cancel', async ({ page }) => {

  await page.goto(url); 
  page.on('dialog', async (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    dialog.type("Veena")
    await dialog.dismiss();
});

  await page.getByText('Click for JS Prompt').click();
});