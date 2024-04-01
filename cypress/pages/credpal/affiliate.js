class affiliate{
    get affiliateformTitle(){
        return cy.contains("Affiliate Onboarding Form");
    }
    get affiliate1stNameTbx(){
        return cy.get("#first_name");
    }
    get affiliateemailTbx(){
        return cy.get("#email");
    }
    get affiliatePhTbx(){
        return cy.get("#phone");
    }
}
module.exports = new affiliate();