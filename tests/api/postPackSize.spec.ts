import { test, expect } from '@playwright/test';

test.describe('API testomat requests', () => {
    const PACKAGE_SIZE = {
        "product_list_id": 1261,
        "height": 20,
        "length": 20,
        "width": 20,
        "volume": 20.2,
        "weight": 25.2
      }
    const bearerToken = 'Ri-PPvzcTYHZhA3j6iQ80uzsOfiNijw4';

    test('Post test', async ({request}) => {

        const res = await request.post('https://api-test.dev.copaltd.services',{
            
        headers: {
            'Authorization': `Bearer ${bearerToken}`
        },
            data:{
                "product_list_id": PACKAGE_SIZE.product_list_id,
                "height": PACKAGE_SIZE.height,
                "length": PACKAGE_SIZE.length,
                "width": PACKAGE_SIZE.width,
                "volume": PACKAGE_SIZE.volume,
                "weight": PACKAGE_SIZE.weight
              }
        });
        expect(res.status()).toBe(200);
        const body = await res.json();
    });

    test('API GET Rrequest #2', async ({request}) => {
        const res = await request.get("https://api-test.dev.copaltd.services", {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        });
        expect(res.status()).toBe(200);
        const data = await res.json();
    })

    test('API PUT Rrequest #3', async ({request}) => {
        const res = await request.put("https://api-test.dev.copaltd.services", {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            },
            data:{
                    "data": {
                      "type": "test",
                      "attributes": {
                        "suite_id": "6ab14cb9",
                        "title": "Change Calculation for a Variety of Coins Inserted by the User"
                      }
                    }
                }

    })
        expect(res.status()).toBe(200)
        const tests = await res.json();
        console.log("TESTS #3", tests);
    })

    test('API DELETE Rrequest #4', async ({request}) => {
        const res = await request.delete("https://api-test.dev.copaltd.services", {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            },

    })
        expect(res.status()).toBe(200)
        const tests = await res.json();
        console.log("TESTS #4", tests);
    })
});