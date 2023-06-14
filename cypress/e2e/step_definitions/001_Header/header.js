Given('I navigate to storybook button', () => {
  cy.visit('http://localhost:6006/?path=/story/example-button--primary')
})

Then('I can click the button', () => {
  cy.contains('Button').click();
})
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('> Unauthorized') || err.message.includes('ResizeObserver loop limit exceeded')) {
    console.error('Cypress caught "> Unauthorized exception", continuing tests', err);
    return false; // test continues
  }
  return true; // test fails
});