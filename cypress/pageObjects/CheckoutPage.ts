import { locators } from "../locators";

class CheckoutPage {
    
    // Method to fill in checkout information
    fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        cy.get(locators.firstNameField).type(firstName);
        cy.get(locators.lastNameField).type(lastName);
        cy.get(locators.postalCodeField).type(postalCode);
        cy.get(locators.continueButton).click();
    }
    // Method to complete the purchase
    completePurchase() {
        cy.get(locators.finishButton).click();
    }
    // Method to verify the order completion message
    verifyOrderComplete() {
        cy.get(locators.checkCompleteContainer).should('be.visible').should('contain', 'Thank you for your order!');
    }
}

export const checkoutPage = new CheckoutPage();
