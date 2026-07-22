class APIUtils {
    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }
 
    async getToken() {
        const url = "https://rahulshettyacademy.com/api/ecom/auth/login"; 
        const apiContext = await request.newContext();
    
        const loginResponse = await apiContext.post(url,{data:loginPayLoad});
        expect(loginResponse.ok()).toBeTruthy();
        const responseJson = await loginResponse.json();
        token = responseJson.token;
        console.log(token); 
        return token;
    }
 
    async createOrder(orderPayLoad) {
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
            data: orderPayLoad,
            headers: {
                'Authorization': response.token,
                'Content-Type': 'application/json'
            }
        });
 
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
 
        return response;
    }
}
 
export { APIUtils };