describe('Navigate', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/at-nam-consequatur-ea-labore-ea-harum-100'); // Assuming your home page URL is '/'
  });

  it('click on logo', () => {
    cy.get('a[href*="/"]').click()
    cy.url().should('equal', 'http://localhost:3000/')
  });

});
