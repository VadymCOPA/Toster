import { expect, type Locator, type Page } from '@playwright/test';

export class FermMainPage {
  readonly page: Page;
  readonly authButton: Locator;
  readonly emailField: Locator;
  readonly passField: Locator;
  readonly confirmButton: Locator;
  readonly confCheckBox: Locator;


  constructor(page: Page) {
    this.page = page;
    this.authButton = page.getByRole('link', { name: 'Увійти', exact: true });
    this.emailField = page.getByPlaceholder('name@mail.com /');
    this.passField = page.getByPlaceholder('Введіть ваш пароль');
    this.confCheckBox = page.getByText('Запам\'ятати мене');
    this.confirmButton = page.getByLabel('You can close this modal').getByRole('button', { name: 'Увійти' });
  }

  async goto() {
    await this.page.goto('https://test.dev.copaltd.services/');
    await this.page.getByRole('link', { name: 'Добре' }).click();
  }

  async authWithPhone(){
    await this.authButton.click();
    await this.emailField.fill('380960797273');
    await this.passField.fill('159753');
    await this.confCheckBox.click();
    await this.confirmButton.click();
    await this.page.getByRole('button', { name: 'ТТ' }).click();
  }
}