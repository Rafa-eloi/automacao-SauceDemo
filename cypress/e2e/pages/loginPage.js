import loginElements from "../elements/loginElements";

class LoginPage {

    //acessa a url dos testes
    accessLoginPage(){
        cy.visit("https://www.saucedemo.com/v1/");
    };

    //preenche os campos de usuario e senha com dados corretos
    successUser(){
        cy.get(loginElements.userFild()).clear().type('standard_user');
    };
    successPassword(){
        cy.get(loginElements.passwordFild()).clear().type('secret_sauce');
    };

    //clica no botão para fazer o login
    clickBtnLogin(){
        cy.get(loginElements.btnLogin()).click();
    };

    //valida se o login foi feito com sucesso
    successLoginValidate(){
        cy.get(loginElements.successLogin()).should("be.visible");
    };

    //clica para abrir o menu sandwich e clica para fazer o logout
    logout(){
        cy.get(loginElements.btnMenu()).click();
        cy.get(loginElements.logout()).click();
    };

    //valida se o logout foi feito com sucesso
    successLoginPage(){
        cy.get(loginElements.btnLogin()).should("be.visible");
    };

    //preenche o campo de usuário com um usuario bloqueado
    blockedUser(){
        cy.get(loginElements.userFild()).clear().type('locked_out_user');
    };

    //valida a mensagem de erro de usuario bloqueado
    errorLoginMessage(){
        cy.get(loginElements.errorMessage()).should("be.visible");
    };

    //preenche os campos de usuario e senha com dados não registrados
    userNotRegistered(){
        cy.get(loginElements.userFild()).clear().type('user_not_registered');
    };
    passwordNotRegistered(){
        cy.get(loginElements.passwordFild()).clear().type('password_not_registered');
    };

    //valida as mensagems de erro de usuario ou senha requiridos
    errorUsernameRequired(){
        cy.contains('Username is required').should("be.visible");
    };
    errorPasswordRequired(){
        cy.contains('Password is required').should("be.visible");
    };
}

export default new LoginPage();