import checkoutElements from "../elements/checkoutElements";
import { faker } from '@faker-js/faker';

class CheckoutPage {

    clickCheckout(){
        cy.get(checkoutElements.btnCheckout()).click();
    };

    successFirstName(){
        cy.get(checkoutElements.firstNameFild()).clear().type(faker.person.firstName());
    };

    successLastName(){
        cy.get(checkoutElements.lastNameFild()).clear().type(faker.person.lastName());
    };

    successPostalCode(){
        cy.get(checkoutElements.postalCodeFild()).clear().type(faker.location.zipCode());
    };

    clickContinue(){
        cy.get(checkoutElements.btnContinue()).click();
    };

    productValidate(){
        cy.get(checkoutElements.productValidatePrimary()).should("be.visible");
        cy.get(checkoutElements.productValidateSecundary()).should("be.visible");
    };

    clickFinish(){
        cy.get(checkoutElements.btnFinish()).click();
    };

    successCheckout(){
        cy.contains('THANK YOU FOR YOUR ORDER').should("be.visible");
    };

    firstNameRequired(){
        cy.contains('First Name is required').should("be.visible");
    };

    lastNameRequired(){
        cy.contains('Last Name is required').should("be.visible");
    };

    postalCodeRequired(){
        cy.contains('Postal Code is required').should("be.visible");
    };
}

export default new CheckoutPage();