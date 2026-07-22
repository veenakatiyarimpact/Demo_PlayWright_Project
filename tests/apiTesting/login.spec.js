import { test, expect, request } from '@playwright/test';



const loginPayLoad = {userEmail:"veena.katiyar@gmail.com",userPassword:"Ashlesha@128"}; 
let response;
let token="";

// Create token 
test.beforeAll( async()=>
{
   const url = "https://rahulshettyacademy.com/api/ecom/auth/login"; 
   const apiContext = await request.newContext();

   const loginResponse = await apiContext.post(url,{data:loginPayLoad});
   expect(loginResponse.ok()).toBeTruthy();
   const responseJson = await loginResponse.json();
   token = responseJson.token;
   console.log("Token => " + token); 
});



 
// Login automatically using token
test('Login automatically', async ({ page }) => {
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);
  await page.goto("https://rahulshettyacademy.com/client");
});




// Create order through API
test('Create order', async ({page}) => {

  await page.addInitScript(value => {
    window.headers.setItem('Authorization', value);
  }, token);

  const url = "https://rahulshettyacademy.com/api/ecom/order/create-order";
  const orderPayload = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]};

  const apiContext = await request.newContext();
  const orderResponse = await apiContext.post(url,{data:orderPayload, headers: {
    Authorization: token,
    'Content-Type': 'application/json'
  }});
  expect(orderResponse.ok()).toBeTruthy();

  const responseJson = await orderResponse.json();
  const orderId = responseJson.orders;
  console.log("Orderid => " + orderId); 

  const message = responseJson.message;
  console.log("Message => " + message); 
});