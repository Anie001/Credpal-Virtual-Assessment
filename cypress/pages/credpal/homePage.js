class homePage{

    get productsDropdownLbl(){
        return cy.get("span[class='font-heading']");
    }
    get businessLnk(){
        return cy.get(" a[title='Business']");
    }
    get whatwedoLnk(){
        return cy.contains("What We Do");
    }
    get affiliatesLnk(){
        return cy.contains("Affiliates");
    }
    get localeddLbl(){
        return cy.contains("🇳🇬").eq(2);
    }
    get downloadTheCredpalAppBtn(){
        return cy.get("button[title='Download the CredPal app']");
    }
    get ptagText(){
        return cy.contains("Take control of your finances on the go! Make payments, save, invest, and access credit - all with one easy-to-use app.");
    }
    get h1Text(){
        return cy.contains("One App, all your Financial Needs");
    }
    get downloadApp(){
        return cy.contains("Download App");
    }
}
module.exports = new homePage();