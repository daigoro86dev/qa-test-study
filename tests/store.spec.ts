import { test, expect } from '../src/fixtures/CustomFixture';
import { FakeDataUtil, FakeUser } from '../src/utils/FakeDataUtil';

test.describe('Sports Store Tests', () => {
  let fakeUser: FakeUser;

  test.beforeEach(async ({ homePage, cookiesModal }) => {
    fakeUser = FakeDataUtil.GetFakeUser();
    await homePage.goToHomePage();
    await cookiesModal.clickAcceptCookiesButton();
  });

  test('Register user, add ultrabost item to cart, logout & login with item still in cart', async ({
    topNavbar,
    registrationModal,
    productsPage,
    productDetailPage,
    cartModal,
    accountPage,
    accountLoginPage,
    cartPage,
  }) => {
    await topNavbar.clickRegisterModalAnchor();
    await registrationModal.registerUser(fakeUser);
    await topNavbar.clickOnAnchorByText('Ultraboost');
    await productsPage.clickOnProductCardByIndex(5);
    await productDetailPage.clickOnSizeSelectorButtonBySize('40');
    await productDetailPage.clickAddToCartButton();
    await productDetailPage.clickAddToCartButton();
    await cartModal.clickViewCartButton();
    await topNavbar.clickCustomerLoginAnchor();
    await accountPage.clickMyProfileButton();
    await accountPage.clickLogoutAllDevicesButton();
    await accountPage.clickConfirmLogoutAllDevicesButton();
    await accountLoginPage.loginUser(fakeUser);
    await cartPage.gotoCartPage();
    await expect(cartPage.getProductDetailByIndex(0)).toBeVisible();
  });
});
