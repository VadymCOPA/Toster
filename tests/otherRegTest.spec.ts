import { test, expect } from '@playwright/test';
import { FermMainPage } from '../pages/main.page';

test('test succeed auth', async ({ page }) => {
  const fermMainPage = new FermMainPage(page)
  await fermMainPage.goto();
  await fermMainPage.authWithPhone();
  await expect(page.getByRole('button', { name: 'Змінити пароль' })).toBeVisible();
});