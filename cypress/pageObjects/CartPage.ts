import { locators } from "../locators";

class CartPage {

    // Method to verify the cart contains the specified product
    verifyProductInCart(productName: string) {
        cy.get(locators.cartContentsContainerLocator).should('contain', productName);
    }
    // Method to proceed to checkout
    proceedToCheckout() {
        cy.get(locators.checkoutButtonLocator).click();
    }
}

export const cartPage = new CartPage();
