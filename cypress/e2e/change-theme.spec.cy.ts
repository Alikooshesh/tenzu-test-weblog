describe('Navigate', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('click on theme toggle switch', () => {

    cy.get('.light').then(($lightElements) => {
      if ($lightElements.length > 0) {
        cy.get('.theme-switch-btn').click()
        cy.get('.dark').should('exist');
      }
    });

    cy.get('.dark').then(($darkElements) => {
      if ($darkElements.length > 0) {
        cy.get('.theme-switch-btn').click()
        cy.get('.light').should('exist');
      }
    });
  });

});
