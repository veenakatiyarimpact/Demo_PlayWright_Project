import { expect } from '@playwright/test';

export class EcommercePage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.loginButton = page.locator("[value='Login']");
    this.products = page.locator('.card-body');
    this.cartLink = page.locator("[routerlink*='cart']");
    this.checkoutButton = page.locator('text=Checkout');
    this.countryInput = page.getByPlaceholder('Select Country');
    this.resultDropdown = page.locator('.ta-results');
    this.userNameText = page.locator(".user__name [type='text']").first();
    this.submitButton = page.locator('.action__submit');
    this.orderConfirmation = page.locator('.hero-primary');
    this.orderIdText = page.locator('.em-spacer-1 .ng-star-inserted');
    this.myOrdersButton = page.locator("button[routerlink*='myorders']");
    this.orderRows = page.locator('tbody tr');
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
    await this.products.first().waitFor();
  }

  async addProductToCart(productName) {
    const count = await this.products.count();
    for (let i = 0; i < count; ++i) {
      const title = await this.products.nth(i).locator('b').textContent();
      if (title?.trim() === productName) {
        await this.products.nth(i).locator('text= Add To Cart').click();
        return;
      }
    }
    throw new Error(`Product not found: ${productName}`);
  }

  async goToCart() {
    await this.cartLink.click();
    await this.page.locator('div li').first().waitFor();
  }

  productInCart(productName) {
    return this.page.locator(`h3:has-text("${productName}")`);
  }

  async checkoutCountry(countryPrefix, countryName) {
    await this.countryInput.type(countryPrefix, { delay: 150 });
    await this.resultDropdown.waitFor();
    const options = this.resultDropdown.locator('button');
    const count = await options.count();
    for (let i = 0; i < count; ++i) {
      const text = (await options.nth(i).textContent())?.trim();
      if (text === countryName) {
        await options.nth(i).click();
        return;
      }
    }
    throw new Error(`Country not found: ${countryName}`);
  }

  async verifyUserEmail(email) {
    await expect(this.userNameText).toHaveText(email);
  }

  async submitOrder() {
    await this.submitButton.click();
    await expect(this.orderConfirmation).toHaveText(' Thankyou for the order. ');
  }

  async getOrderId() {
    return this.orderIdText.textContent();
  }

  async goToOrders() {
    await this.myOrdersButton.click();
    await this.orderRows.first().waitFor();
  }

  async verifyOrderExists(orderId) {
    const count = await this.orderRows.count();
    for (let i = 0; i < count; ++i) {
      const rowOrderId = await this.orderRows.nth(i).locator('th').textContent();
      if (rowOrderId && orderId.includes(rowOrderId)) {
        await this.orderRows.nth(i).locator('button').first().click();
        return;
      }
    }
    throw new Error(`Order not found: ${orderId}`);
  }

  async verifyOrderDetails(orderId) {
    const orderIdDetails = await this.page.locator('.col-text').textContent();
    await expect(orderIdDetails).toContain(orderId);
  }
}
