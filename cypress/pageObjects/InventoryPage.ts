import { locators } from "../locators";

class InventoryPage {
    // Method to add a product to the cart
    addProductToCart(productAddedToCartLocator: string) {
        cy.get(productAddedToCartLocator).click();
    }
    // Method to open the cart
    openCart() {
        cy.get(locators.cartIconLocator).click();
    }
}
// Export an instance of the InventoryPage class
export const inventoryPage = new InventoryPage();
