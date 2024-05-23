import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.dev.copaltd.services/');
  await page.getByRole('link', { name: 'Увійти', exact: true }).click();
  await page.getByPlaceholder('name@mail.com /').click();
  await page.getByPlaceholder('name@mail.com /').fill('380960797273');
  await page.getByPlaceholder('Введіть ваш пароль').click();
  await page.getByPlaceholder('Введіть ваш пароль').fill('159753');
  await page.getByLabel('You can close this modal').getByRole('button', { name: 'Увійти' }).click();
  await page.getByRole('button', { name: 'ТТ' }).click();
  await expect(page.locator('section')).toContainText('+380 96 079 72 73');
});