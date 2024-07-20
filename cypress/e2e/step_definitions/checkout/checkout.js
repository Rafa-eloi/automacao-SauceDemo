import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../../pages/loginPage';
import cartPage from '../../pages/cartPage';
import checkoutPage from '../../pages/checkoutPage';

//Bloco responsável pelo login
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

//Bloco responsável por adicionar produtos ao carrinho carrinho
When("Cliclo em adicionar produtos ao carrinho", () => {
    cartPage.clickAddCart();
});
When("Clico para ir para o carrinho", () => {
    cartPage.clickCart();
});
Then("Vizualizo os produtos no carrinho", () => {
    cartPage.cartItemValidate();
});

//Bloco dos cenários de checkout
When("Cliclo em Checkout", () => {
    checkoutPage.clickCheckout();
});

When("Preencho corretamente o nome", () => {
    checkoutPage.successFirstName();
});

When("Preencho corretamente o sobrenome", () => {
    checkoutPage.successLastName();
});

When("Preencho corretamente o cep", () => {
    checkoutPage.successPostalCode();
});

When("Cliclo em continuar", () => {
    checkoutPage.clickContinue();
});

When("Vizualizo os produtos na tela finalizar", () => {
    checkoutPage.productValidate();
});

When("Clico em finish", () => {
    checkoutPage.clickFinish();
});

Then("Vizualizo a tela de sucesso", () => {
    checkoutPage.successCheckout();
});

Then("Vizualizo a mensagem de First Name is required", () => {
    checkoutPage.firstNameRequired();
});

Then("Vizualizo a mensagem de Last Name is required", () => {
    checkoutPage.lastNameRequired();
});

Then("Vizualizo a mensagem de Postal Code is required", () => {
    checkoutPage.postalCodeRequired();
});

