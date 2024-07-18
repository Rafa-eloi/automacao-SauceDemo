import homeElements from "../elements/homeElements";

class HomePage {

    productHomeValidate(){
        cy.get(homeElements.productHome()).should("be.visible");
    }

    clickBtnSandwich(){
        cy.get(homeElements.btnMenuSandwich()).click();
    }

    linksMenuValidate(){
        cy.get(homeElements.linkAbout()).should("be.visible");
        cy.get(homeElements.linkInventory()).should("be.visible");
        cy.get(homeElements.linkLogout()).should("be.visible");
        cy.get(homeElements.linkReset()).should("be.visible");
    }
}

export default new HomePage();