class homepage{
get productsDropdownLbl(){
return
cy.get("span[='font-heading']");
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
return cy.contains(" Take control of your finances on the go! Make payments, save, invest, and access credit - all with one easy-to-use app.");
}
get h1Text(){
return cy.contains("One App, all your Financial Needs");
}
get downloadApp(){
return cy.contains("Download App");
}
}
module.exports = new homePage();
{
"url":"https://www.credpal.com/",
"productLabel":"Products",
"businessLabel":"Business",
"whatwedoLink":"What We Do",
"affiliatesLink":"Affiliates",
"localeLabel":"🇳🇬",
"downloadtheCredPalappButtonLabel":"Download the CredPal app",
"ptagText":" Take control of your finances on the go! Make payments, save, invest, and access credit - all with one easy-to-use app.",
"hText":"One App, all your Financial Needs"
}
import homePage from "../../../pages/credpal/homePage";
import testinputs from
"../../../fixtures/Credpal_Testinputs.json";
describe("Credpal Home Page Validation",()=>{

it("Verify user can land on Home Page",()=>{
cy.visit(testinputs.url);
homePage.productsDropdownLbl.should("exist").should("have.text",testinputs.productLabel);
homePage.businessLnk.should("exist").should("have.text",testinputs.businessLabel);
homePage.whatwedoLnk.should("exist").should("have.text",testinputs.whatwedoLink);
homePage.affiliatesLnk.should("exist").should("have.text",testinputs.affiliatesLink);
homePage.downloadTheCredpalAppBtn.should("exist").should("have.text",testinputs.downloadtheCredPalappButtonLabel)
homePage.ptagText.should("exist").should("have.text",testinputs.ptagText);
homePage.h1Text.should("exist").should("have.text",testinputs.hText);
homePage.downloadApp.should("exist").should("have.length.lte",5);
})
})
