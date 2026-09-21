const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');

test.describe('Форма логина saucedemo', () => {
  test('успешный вход standard_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('ошибка при неверном пароле', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrongpassword');
    const error = await loginPage.getErrorText();
    expect(error).toContain('Username and password do not match');
  });

  test('заблокированный пользователь не может войти', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    const error = await loginPage.getErrorText();
    expect(error).toContain('Sorry, this user has been locked out');
  });
});
