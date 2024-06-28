describe('Navigate', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // Assuming your home page URL is '/'
  });

  it('displays list of posts on successful API fetch', () => {
    cy.get('.post-box')
  });

  it('click on first post link', () => {
    cy.get('a[href*="at-nam-consequatur-ea-labore-ea-harum-100"]').click()
    cy.url().should('include', '100')
    cy.get('h1').contains("at nam consequatur ea labore ea harum")
  });

});
