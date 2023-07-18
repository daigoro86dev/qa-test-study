import { test, expect } from '../src/fixtures/CustomFixture';
import { FakeDataUtil, FakeUser } from '../src/utils/FakeDataUtil';
import GeoUtils from '../src/utils/GeoUtils';

const countrieSpecifics = GeoUtils.LoadCountrySpecificData();

for (const country of countrieSpecifics) {
  test.describe('Sports Store Tests', () => {
    let fakeUser: FakeUser;

    test.beforeEach(async ({ homePage, cookiesModal }) => {
      fakeUser = FakeDataUtil.GetFakeUser();
      await homePage.goToHomePage(country.countrySpecificUrl);
      await cookiesModal.clickAcceptCookiesButton();
    });

    test('Register user, add ultrabost item to cart, logout & login with item still in cart', async ({
      topNavbar,
      registrationModal,
      productsPage,
      productDetailPage,
    }) => {
      await topNavbar.clickRegisterModalAnchor();
      await registrationModal.registerUser(fakeUser);
      await topNavbar.clickOnAnchorByText('Ultraboost');
      await productsPage.clickOnProductCardByIndex(0);
      await productDetailPage.clickOnSizeSelectorButtonBySize('40');
      await productDetailPage.clickAddToCartButton();
    });
  });
}
