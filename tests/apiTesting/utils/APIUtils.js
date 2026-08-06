import { expect } from '@playwright/test';

class APIUtils {
    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    async getToken() {
        const url = 'https://rahulshettyacademy.com/api/ecom/auth/login';
        const loginResponse = await this.apiContext.post(url, { data: this.loginPayLoad });
        expect(loginResponse.ok()).toBeTruthy();
        const responseJson = await loginResponse.json();
        const token = responseJson.token;
        console.log(token);
        return token;
    }

    async createOrder(orderPayLoad) {
        const response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
            data: orderPayLoad,
            headers: {
                Authorization: response.token,
                'Content-Type': 'application/json',
            },
        });

        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        response.orderId = orderResponseJson.orders[0];
        return response;
    }
}

export { APIUtils };