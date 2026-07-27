import {test,expect} from "@playwright/test";


test.describe.configure({ mode: 'parallel' });


test.describe('GreenKart App', () => {
  test('Home page loads and displays products', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await expect(page.locator('.products')).toBeVisible();
    // await expect(page.locator('.product')).toHaveCountGreaterThan(0);
  });
  test('Search filters products', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.fill('input[type="search"]', 'Brocolli');
    await expect(page.locator('.product:has-text("Brocolli")')).toBeVisible();
    await page.fill('input[type="search"]', '');
    // await expect(page.locator('.product')).toHaveCountGreaterThan(1);
  });
  test('Add product to cart and verify cart count', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    const firstProduct = page.locator('.product').first();
    await firstProduct.locator('button:has-text("ADD TO CART")').click();
    await expect(page.locator('.cart-info span')).toHaveText('1');
  });
  test('Increase quantity before adding to cart', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    const firstProduct = page.locator('.product').first();
    await firstProduct.locator('a.increment').click();
    await firstProduct.locator('button:has-text("ADD TO CART")').click();
    await expect(page.locator('.cart-info span')).toHaveText('2');
  });
  test('Cart page displays added products', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.locator('.product:has-text("Brocolli") button:has-text("ADD TO CART")').click();
    await page.locator('a.cart-icon').click();
    await page.locator('div.cart-preview.active').waitFor();
    await expect(page.locator('div.cart-preview.active .product-name')).toHaveText(/Brocolli/);
  });
  test('Proceed to checkout navigates to checkout page', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.locator('.product:has-text("Brocolli") button:has-text("ADD TO CART")').click();
    await page.locator('a.cart-icon').click();
    await page.locator('div.cart-preview.active').waitFor();
    await page.locator('button:has-text("PROCEED TO CHECKOUT")').click();
    await expect(page).toHaveURL(/cart/);
  });
});