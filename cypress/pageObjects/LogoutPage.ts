import { locators } from "../locators";

class LogoutPage {
 

    // Method to click the menu button
    clickMenuButton() {
        cy.get(locators.primaryHeader).find('#react-burger-menu-btn').click();
    }

    // Method to click the logout link
    clickLogoutLink() {
        cy.get(locators.logoutSidebarLink).click();
    }
}
export const logoutPage = new LogoutPage();
