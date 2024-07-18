import loginElements from "../elements/loginElements";

class LoginPage {

    accessLoginPage(){
        cy.visit("https://www.saucedemo.com/v1/");
    }

    successUser(){
        cy.get(loginElements.userFild()).clear().type('standard_user');
    }

    successPassword(){
        cy.get(loginElements.passwordFild()).clear().type('secret_sauce');
    }

    clickBtnLogin(){
        cy.get(loginElements.btnLogin()).click();
    }

    successLoginValidate(){
        cy.get(loginElements.successLogin()).should("be.visible");
    }
}

export default new LoginPage();