import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../../pages/loginPage';
import cartPage from '../../pages/cartPage';

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

//Bloco dos cenários de carrinho
When("Cliclo em adicionar produtos ao carrinho", () => {
    cartPage.clickAddCart();
});

When("Clico para ir para o carrinho", () => {
    cartPage.clickCart();
});

Then("Vizualizo os produtos no carrinho", () => {
    cartPage.cartItemValidate();
});

When("Clico para remover os produtos do carrinho", () => {
    cartPage.clickRemoveCart();
});

Then("Vizualizo que os produtos foram removidos do carrinho", () => {
    cartPage.cartRemoveValidate();
});
