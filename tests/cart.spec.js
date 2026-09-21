const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { InventoryPage } = require('./pages/InventoryPage');

test('добавление товара в корзину', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addFirstProduct();
  const count = await inventoryPage.getCartCount();
  expect(count).toContain('1');

  await inventoryPage.goToCart();
  await expect(page).toHaveURL(/cart/);
  await expect(page.getByText('Your Cart')).toBeVisible();
});
