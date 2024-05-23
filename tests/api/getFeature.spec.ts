const { test, expect } = require('@playwright/test');

test('should get all fetures', async ({ request }) => {
    const bearerToken = 'Ri-PPvzcTYHZhA3j6iQ80uzsOfiNijw4';

    const headers = {
        'Authorization': `Bearer ${bearerToken}`
    };
    const response = await request.get("https://api-test.dev.copaltd.services/api/v1/features", { headers });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});
