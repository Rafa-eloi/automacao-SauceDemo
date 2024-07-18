import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
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