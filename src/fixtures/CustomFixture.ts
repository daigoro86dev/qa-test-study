import { test as base } from '@playwright/test';
import HomePage from '../page-objects/HomePage';
import ProductsPage from '../page-objects/ProductsPage';
import ProductDetailPage from '../page-objects/ProductDetailPage';
import CartPage from '../page-objects/CartPage';
import TopNavbar from '../page-objects/common-elements/TopNavbar';
import CartModal from '../page-objects/modals/CartModal';
import CookiesModal from '../page-objects/modals/CookiesModal';
import RegistrationModal from '../page-objects/modals/RegistrationModal';
import LoginModal from '../page-objects/modals/LoginModal';
import AccountPage from '../page-objects/AccountPage';
import AccountLoginPage from '../page-objects/AccountLoginPage';

type CustomFixture = {
  // Pages
  homePage: HomePage;
  productsPage: ProductsPage;
  productDetailPage: ProductDetailPage;
  cartPage: CartPage;
  accountPage: AccountPage;
  accountLoginPage: AccountLoginPage;
  // Common Components
  topNavbar: TopNavbar;
  // Modals
  cartModal: CartModal;
  cookiesModal: CookiesModal;
  loginModal: LoginModal;
  registrationModal: RegistrationModal;
};

export const test = base.extend<CustomFixture>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  productDetailPage: async ({ page }, use) => {
    await use(new ProductDetailPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  accountLoginPage: async ({ page }, use) => {
    await use(new AccountLoginPage(page));
  },
  topNavbar: async ({ page }, use) => {
    await use(new TopNavbar(page));
  },
  cartModal: async ({ page }, use) => {
    await use(new CartModal(page));
  },
  cookiesModal: async ({ page }, use) => {
    await use(new CookiesModal(page));
  },
  loginModal: async ({ page }, use) => {
    await use(new LoginModal(page));
  },
  registrationModal: async ({ page }, use) => {
    await use(new RegistrationModal(page));
  },
});

export { expect } from '@playwright/test';
