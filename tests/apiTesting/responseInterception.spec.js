import { test, expect, request } from '@playwright/test';
import { APIUtils } from './utils/APIUtils.js';

const loginPayLoad = {userEmail:"veena.katiyar@gmail.com",userPassword:"Ashlesha@128"}; 
const orderPayLoad = { orders: [{ country: 'India', productOrderedId: '6960eac0c941646b7a8b3e68' }] };
const fakePayLoadOrders = { data: [], message: 'No Orders' };

let response;
let token = "";

test.describe.serial('Response interception', () => {

  // Create new order without response interception
  test('Create new order without response interception', async ({ page }) =>
  {
   // Login
   let url = "https://rahulshettyacademy.com/api/ecom/auth/login"; 
   const apiContext = await request.newContext();

   const loginResponse = await apiContext.post(url,{data:loginPayLoad});
   expect(loginResponse.ok()).toBeTruthy();
   let responseJson = await loginResponse.json();
   token = responseJson.token;
   console.log("Token => " + token); 

   // Create order
   url = "https://rahulshettyacademy.com/api/ecom/order/create-order";
   response = await apiContext.post(url, {
      data: orderPayLoad,
      headers: { Authorization: token },
   });

   responseJson = await response.json();
   console.log("Order Id => " + JSON.stringify(responseJson.orders));
   console.log("Product Id => " + responseJson.productOrderId);
   console.log("Message => " + responseJson.message);
});

 
 
//create new order with response interception
test('Create new order with response interception', async ({ page }) => {
  // Ensure token is available when this test runs standalone
  if (!token) {
    const loginUrl = "https://rahulshettyacademy.com/api/ecom/auth/login";
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post(loginUrl, { data: loginPayLoad });
    expect(loginResponse.ok()).toBeTruthy();
    const responseJson = await loginResponse.json();
    token = responseJson.token;
    await apiContext.dispose();
  }

  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);

  // Intercept the orders API and return fake payload
  await page.route('**/api/ecom/order/get-orders-for-customer/*', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(fakePayLoadOrders),
    });
  });

  await page.goto("https://rahulshettyacademy.com/client");
  await page.waitForLoadState('networkidle');

  const [orderResponse] = await Promise.all([
    page.waitForResponse('**/api/ecom/order/get-orders-for-customer/*'),
    page.locator("button[routerlink*='myorders']").click(),
  ]);

  expect(orderResponse.ok()).toBeTruthy();
  const responseBody = await orderResponse.json();
  expect(responseBody).toEqual(fakePayLoadOrders);
});

});