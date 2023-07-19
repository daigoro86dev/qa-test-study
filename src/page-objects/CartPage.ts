import { Locator, Page } from '@playwright/test';

export default class CartPage {
  private readonly page: Page;
  private readonly productDetailCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productDetailCards = page.locator(
      "[data-auto-id='glass-cart-line-item']"
    );
  }

  async gotoCartPage() {
    // Since the cart button doesn't list existing items on login
    // We'll use this to check the cart page status
    await this.page.goto('/cart');
  }

  getProductDetailByIndex(productCardIndex: number) {
    return this.productDetailCards.nth(productCardIndex);
  }

  getProductDetailItemNameByIndex(productCardIndex: number) {
    return this.getProductDetailByIndex(productCardIndex).locator(
      "[data-auto-id='glass-cart-line-item-name']"
    );
  }

  getProductDetailItemColourByIndex(productCardIndex: number) {
    return this.getProductDetailByIndex(productCardIndex).locator(
      "[data-auto-id='cart-line-item-attribute-color']"
    );
  }

  getProductDetailItemSizeByIndex(productCardIndex: number) {
    return this.getProductDetailByIndex(productCardIndex).locator(
      "[data-auto-id='cart-line-item-attribute-size']"
    );
  }

  getProductDetailItemPriceByIndex(
    productCardIndex: number,
    hasDiscount: boolean
  ) {
    return this.getProductDetailByIndex(productCardIndex)
      .locator("[data-auto-id='gl-price-item']")
      .locator(
        `${
          hasDiscount ? '.gl-price-item.gl-price-item--sale' : '.gl-price-item'
        }`
      );
  }
}
