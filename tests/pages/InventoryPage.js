class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButtons = page.locator('[data-test^="add-to-cart"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addFirstProduct() {
    await this.addToCartButtons.first().click();
  }

  async getCartCount() {
    return this.cartBadge.textContent();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = { InventoryPage };
