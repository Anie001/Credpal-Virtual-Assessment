import homePage from "../../../pages/credpal/homePage";
import testinputs from "../../../fixtures/Credpal_Testinputs.json";
import affiliate from "../../../pages/credpal/affiliate";



describe("Credpal Home Page Validation",()=>{

    it.skip("Verify user can land on Home Page",()=>{
        cy.visit(testinputs.url);
        homePage.productsDropdownLbl.should("exist").should("have.text",testinputs.productLabel);
        homePage.businessLnk.should("exist").should("have.text",testinputs.businessLabel);
        homePage.whatwedoLnk.should("exist").should("have.text",testinputs.whatwedoLink);
        homePage.affiliatesLnk.should("exist").should("have.text",testinputs.affiliatesLink);
        homePage.downloadTheCredpalAppBtn.should("exist").should("have.text",testinputs.downloadtheCredPalappButtonLabel)
        homePage.ptagText.should("exist").should("have.text",testinputs.ptagText);
        homePage.h1Text.should("exist").should("have.text",testinputs.hText);
        homePage.downloadApp.should("exist").should("have.length.lte",5).should("have.text",testinputs.downoadApp);
    })

    it("Verify that when user clicks on 'Affiliates' link on landing page, user  should be redirected to an Affiliate onboarding form field page",()=>{
        cy.visit(testinputs.url);
        homePage.affiliatesLnk.should("exist").should("have.text",testinputs.affiliatesLink).click();
        cy.wait(2000)
        cy.url().should("contains","/sales");
        affiliate.affiliateformTitle.eq(0).should("exist").should("have.text",testinputs.affiliateformTitle);
        affiliate.affiliate1stNameTbx.should("exist");
        affiliate.affiliateemailTbx.should("exist");
        affiliate.affiliatePhTbx.should("exist");

    })
})