import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../../pages/loginPage';

Given("Acesso a tela de login", () => {
    loginPage.accessLoginPage();
});

When("Preencho corretamente o usuário", () => {
    loginPage.successUser();
});

When("Preencho cooretamente a senha", () => {
    loginPage.successPassword();
});

When("Clico em login", () => {
    loginPage.clickBtnLogin();
});

Then("Visualizo a tela de produtos", () => {
    loginPage.successLoginValidate();
});

When("Clico pra realizar logout", () => {
    loginPage.logout();
});

Then("Visualizo a tela login", () => {
    loginPage.successLoginPage();
});

When("Preencho o campo com um usuário bloqueado", () => {
    loginPage.blockedUser();
});

Then("Visualizo a mensagem de erro", () => {
    loginPage.errorLoginMessage();
});

When("Preencho o campo com um usuário inexistente", () => {
    loginPage.userNotRegistered();
});

When("Preencho o campo com um senha inexistente", () => {
    loginPage.passwordNotRegistered();
});

Then("Visualizo a mensagem de Username is required", () => {
    loginPage.errorUsernameRequired();
});

Then("Visualizo a mensagem de Password is required", () => {
    loginPage.errorPasswordRequired();
});
