// import { test, expect, request } from '@playwright/test';
// import { APIUtils } from './utils/APIUtils.js';

// const loginPayLoad = {userEmail:"veena.katiyar@gmail.com",userPassword:"Ashlesha@128"}; 
// const orderPayLoad = { orders: [{ country: 'India', productOrderedId: '67a8dde5c0d3e6622a297cc8' }] };
// const fakePayLoadOrders = { data: [], message: 'No Orders' };

// let response;
// let token="";

// // Create token 
// // test.beforeAll( async()=>
// test('Create new order', async ({ page }) => {
// {
//    const url = "https://rahulshettyacademy.com/api/ecom/auth/login"; 
//    const apiContext = await request.newContext();

//    const loginResponse = await apiContext.post(url,{data:loginPayLoad});
// //    expect(loginResponse.ok()).toBeTruthy();
//    const responseJson = await loginResponse.json();
//    token = responseJson.token;
//    console.log("Token => " + token); 

//    // Create order
//    url = "https://rahulshettyacademy.com/api/ecom/order/create-order"
//    response = await apiContext.post(url,{data:orderPayLoad});
// });


// // test.beforeAll(async () => {
// //   const apiContext = await request.newContext();
// //   const apiUtils = new APIUtils(apiContext, loginPayLoad);  
// // });
 
 
// //create order is success
// test('Place the order', async ({ page }) => {
//   await page.addInitScript((token) => {
//     window.localStorage.setItem('token', token);
//   }, response.token);

//   await page.route('**/api/ecom/order/get-orders-for-customer/*', async (route) => {
//     const originalResponse = await route.fetch();
//     await route.fulfill({
//       status: originalResponse.status(),
//       headers: originalResponse.headers(),
//       contentType: 'application/json',
//       body: JSON.stringify(fakePayLoadOrders),
//     });
//   });

//   await page.goto('https://rahulshettyacademy.com/client');

//   const [response] = await Promise.all([
//     page.waitForResponse('**/api/ecom/order/get-orders-for-customer/*'),
//     page.locator("button[routerlink*='myorders']").click(),
//   ]);

//   const orderText = await page.locator('.mt-4').textContent();
//   console.log(orderText);
//   expect(orderText).toContain('No Orders');
// });