describe("template spec", () => {
  it("passes", () => {
    //cy.visit("https://captable.highbond-s2.com/login");
    cy.visit("https://invest.highbond-s2.com/login/");
    cy.screenshot({ capture: "fullPage" });
  });
});
