import cartElements from "../elements/cartElements";

class CartPage {

    clickAddCart(){
        cy.get(cartElements.btnAddProductPrimary()).click();
        cy.get(cartElements.btnAddProductSecundary()).click();
    };

    clickCart(){
        cy.get(cartElements.btnCart()).click();
    };

    cartItemValidate(){
        cy.get(cartElements.productCartValidatePrimary()).should("be.visible");
        cy.get(cartElements.productCartValidateSecundary()).should("be.visible");
    };

    clickRemoveCart(){
        cy.get(cartElements.btnRemoveProductSecundary()).click();
        cy.get(cartElements.btnRemoveProductPrimary()).click();
    };

    cartRemoveValidate(){
        cy.get(cartElements.btnRemoveProductPrimary()).should("not.exist");
        cy.get(cartElements.btnRemoveProductSecundary()).should("not.exist");
    };
}

export default new CartPage();