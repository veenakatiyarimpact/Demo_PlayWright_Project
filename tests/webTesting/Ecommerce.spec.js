import { test, expect } from '@playwright/test';
import { EcommercePage } from './pageObjects/EcommercePage.js';



test('Buy_Products', async ({ page }) => {
   const email = "veena.katiyar13@gmail.com";
   const productName = 'ZARA COAT 3';
   const ecommerce = new EcommercePage(page);

   await ecommerce.goto();
   await ecommerce.login(email, 'Ashlesha@128');

   await ecommerce.addProductToCart(productName);
   await ecommerce.goToCart();

   await expect(ecommerce.productInCart(productName)).toBeVisible();
   await ecommerce.checkoutButton.click();
 
   await ecommerce.checkoutCountry('ind', 'India');
   await ecommerce.verifyUserEmail(email);
   await ecommerce.submitOrder();

   const orderId = await ecommerce.getOrderId();
   console.log(orderId);
 
   await ecommerce.goToOrders();
   await ecommerce.verifyOrderExists(orderId);
   await ecommerce.verifyOrderDetails(orderId);
});