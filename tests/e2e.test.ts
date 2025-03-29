import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { HomePage } from '../pages/HomePage';
import { CreateAccountForm } from '../pages/CreateAccount';

   
    test('User should navigation between pages and sorting', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto('/');
      //Select Womens option and verify Women page is loaded and navigated to new page
      await homePage.navigateToWomenPage();
      const womenPage = await homePage.verifyWomenPage();
      expect(womenPage).toContainText('Women');
      
      //Select Gear option and verify Gear page is loaded and navigated to new page
      await homePage.navigateToGearPage();
      const gearPage = await homePage.verifyGearPage();
      expect(gearPage).toContainText('Gear');
      
      //Select Mens option and verify men page is loaded and navigated to new page
      await homePage.navigateToMenPage();
      const menPage = await homePage.verifyMenPage();
      expect(menPage).toContainText('Men');

     //Verify page sorting by price and name
     await homePage.navigateSort();
     
     //sort by price
     await homePage.priceSort('price');
     const verSort = await homePage.verifyPriceSort();
     expect(verSort).toContainText('CHF 24.00');

     //sort by name
     await homePage.priceSort('name');
     const verNameSort = await homePage.verifyNameSort();
     expect(verNameSort).toContainText('Aero Daily Fitness Tee');

    });
  
    test('User should be able to add product to cart', async ({ page }) => {
      const productPage = new ProductPage(page);
      await productPage.goto('/');

      //Navigate to product
      await productPage.navigateToJacketsPage();
      await productPage.selectProduct();

      //Select product
      const productName = await productPage.verifyProduct();
      expect(productName).toContainText('Montana Wind Jacket');

      //Verify product cost
      const productCost = await productPage.verifyPrice();
      expect(productCost).toContainText('CHF 49.00');
      
      //Add to cart
      const addToCart = await productPage.addToCart();
      //expect(addToCart).toBeVisible();
      await productPage.addProductToCart();

      const errorVal1 = await productPage.verifyErrorMsg1();
      expect(errorVal1).toContainText('This is a required field.');
      
      const errorVal2 = await productPage.verifyErrorMsg2();
      expect(errorVal2).toContainText('This is a required field.');

      await productPage.selectProductDetails();
      await productPage.addProductToCart();
      await productPage.checkout();

      //const itemNumbers = await productPage.getCartItemCount();
      //expect(itemNumbers).toContain('3');
   
      const checkoutPage = new CheckoutPage(page);
      
      await checkoutPage.emailData('testuser11@example.com');
      
      await checkoutPage.firstName('John');
      await checkoutPage.lastName('Mohan');

      await checkoutPage.streetName('verkiu');
      await checkoutPage.countryRegionName();

      await checkoutPage.cityName('vilnius');
      await checkoutPage.postalCode('09109');
      await checkoutPage.phoneCode('4679765');
      await checkoutPage.continueButton();

      const payMsg = await checkoutPage.paymentMsg();
      expect(payMsg).toContainText('Payment Method');
      expect(payMsg).toContainText('Check / Money order');
      
      await checkoutPage.selectBanking();
      
      expect(payMsg).toContainText('My billing and shipping address are the same');
      expect(payMsg).toContainText('Place Order');

      await checkoutPage.placeOrder();
      
      const menPage = await checkoutPage.successMsg();
      expect.soft(menPage).toContainText('Thank you for your purchase!');

      const confirmationMsg = await checkoutPage.confirmationMsg();
      expect.soft(confirmationMsg).toContainText('We\'ll email you an order confirmation with details and tracking info.');
      
      
      const createAccButton = await checkoutPage.createAccButton();
      expect.soft(createAccButton).toBeVisible();
      const createAccButtonTxt = await checkoutPage.createAccButtonTxt();
      expect.soft(createAccButtonTxt).toContainText('Create an Account');
    
      const createAccount = new CreateAccountForm(page);
      await createAccount.createAccount();

      // await createAccount.firstName('John');
      // await createAccount.lastName('Bard');
      // await createAccount.emailData('john@gmail.com');
      
      await createAccount.selectPassword('john@1234');
      await createAccount.confirmPassword('john@1234');
      await createAccount.createAccountButton();
      await createAccount.tracAccount();
    });

  