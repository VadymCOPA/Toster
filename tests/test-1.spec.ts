import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.dev.copaltd.services/');
  await page.getByRole('link', { name: 'Добре' }).click();
  await page.locator('#menu-nav-list-catalog').getByRole('link', { name: 'Шини' }).click();
  await page.getByRole('link', { name: 'Шини для сільгосптехніки' }).click();
  await page.locator('#product-ajax div').filter({ hasText: 'АКЦІЯ Шина Armour F-2 7.50-16' }).getByRole('link').nth(1).click();
  await expect(page.locator('#items-in-cart-count')).toContainText('1');
});