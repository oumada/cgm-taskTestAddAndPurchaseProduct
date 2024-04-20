import { locators } from "../locators";
/*
* Definiton of the login page class
**/
class LoginPage {
    /*
    * User name setter
    **/
    setUserName(username: string) {
        cy.get(locators.usernameField).type(username);
    }
    /*
    * Password setter
    **/
    setPassword(password: string) {
        cy.get(locators.passwordField).type(password);
    }
    /*
    * clickSubmit function 
    **/
    clickSubmit() {
        cy.get(locators.submitButton).click();
    }
    /*
    * verify the URL 
    **/
    verifyLogin() {
        cy.url().should('include', '/inventory.html');
    }
}

export default LoginPage;
