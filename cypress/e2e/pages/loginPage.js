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

    logout(){
        cy.get(loginElements.btnMenu()).click();
        cy.get(loginElements.logout()).click();
    }

    successLoginPage(){
        cy.get(loginElements.btnLogin()).should("be.visible");
    }

    blockedUser(){
        cy.get(loginElements.userFild()).clear().type('locked_out_user');
    }

    errorLoginMessage(){
        cy.get(loginElements.errorMessage()).should("be.visible");
    }

    userNotRegistered(){
        cy.get(loginElements.userFild()).clear().type('user_not_registered');
    }

    passwordNotRegistered(){
        cy.get(loginElements.passwordFild()).clear().type('password_not_registered');
    }

    errorUsernameRequired(){
        cy.contains('Username is required').should("be.visible");
    }

    errorPasswordRequired(){
        cy.contains('Password is required').should("be.visible");
    }
}

export default new LoginPage();