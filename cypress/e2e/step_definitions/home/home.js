import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../../pages/loginPage';
import homePage from '../../pages/homePage';

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

//Bloco dos cenários de home
Then("Visualizo os produtos da home", () => {
    homePage.productHomeValidate();
});

When("Cliclo no menu sandwich", () => {
    homePage.clickBtnSandwich();
});

Then("Visualizo todos os links", () => {
    homePage.linksMenuValidate();
});
