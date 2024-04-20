/// <reference types="cypress" />

import { locators } from "../locators"
import { cartPage } from "../pageObjects/CartPage"
import { checkoutPage } from "../pageObjects/CheckoutPage"
import { inventoryPage } from "../pageObjects/InventoryPage"
import Login from "../pageObjects/LoginPage"
import { logoutPage } from "../pageObjects/LogoutPage"

context('SauceDemosTest', () => {
  it('should add a red t-shirt to the shopping cart and then check it out', () => {
    cy.visit('https://www.saucedemo.com')
    // Log in
    cy.fixture('user').then((data) => {
      const ln = new Login()
      ln.setUserName(data.username)
      ln.setPassword(data.password)
      ln.clickSubmit();
      ln.verifyLogin();
    })
    // Select red t-shirt and add it to the cart
    inventoryPage.addProductToCart(locators.productAddedToCartLocator);
    // Open shopping cart
    inventoryPage.openCart();
    // Verify the cart contains the selected item
    cartPage.verifyProductInCart('T-Shirt (Red)');
    // Verify the cart contains one element 
    cy.get(`${locators.cartContentsContainerLocator} .cart_item`).should('have.length', 1);
    // Checkout shopping cart
    cartPage.proceedToCheckout()
    // Fill in checkout information
    cy.url().should('include', '/checkout-step-one.html');
    cy.fixture('user').then((data) => {
      checkoutPage.fillCheckoutInfo(data.firstName, data.lastName, data.postalCode);
    })
    // Click the finish button to complete purchase 
    checkoutPage.completePurchase();
    // Verify the order completion message
    checkoutPage.verifyOrderComplete();
    // Open shopping cart
    inventoryPage.openCart();
    // Verify that shopping cart is empty 
    cy.get(`${locators.cartContentsContainerLocator} .cart_item`).should('not.exist');
    // Back to home page to continue shopping
    cy.get(locators.continuShoppingButton).click();
    // Verify the URL 
    cy.url().should('include', '/inventory.html');
    // Click the menu button
    logoutPage.clickMenuButton();
    // Click the logout link
    logoutPage.clickLogoutLink();
    // Assert the URL to confirm logout
    cy.url().should('eq', 'https://www.saucedemo.com/');

  })
})
