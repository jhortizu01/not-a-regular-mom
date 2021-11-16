describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://cool-parent-api.herokuapp.com/api/v1/parents/parentData/', { fixture: "parents.json" })
      .as('parentData')
    cy.intercept('GET', 'https://cool-parent-api.herokuapp.com/api/v1/parents/eventData/', { fixture: "events.json" })
      .as('eventData')
    cy.visit('https://cool-parent.herokuapp.com/')
      .get('[href="/events"] > .button')
      .click()
  })

  it('Should hold a form and event container', () => {
    cy.get('.event-container')
      .get('form')
      .should('be.visible')
      .get('.event-card-container')
      .children()
      .should('have.length', 2)
  })

  it('Should have 6 form entries', () => {
    cy.get('form')
      .get('input')
      .should('have.length', 6)
  })

  it('Should submit a new event when fields all fields are filled out', () => {
    cy.get('form')
      .get('[placeholder="Host Name"]')
      .type('Jennifer')
      .get('[placeholder="What is the occasion?"]')
      .type('Party')
      .get('[placeholder="Where?"]')
      .type('My House')
      .get('[placeholder="When?"]')
      .type('12/21/21')
      .get('[placeholder="Time?"]')
      .type('12 pm')
      .get('[placeholder="Description of Event"]')
      .type('Just a party to celebrate life!')
      .get('.submit')
      .click()
      .get('.event-card-container')
      .children()
      .should('have.length', 3)
  })

  it('Should display an error when fields are missing from the inputs', () => {
    cy.get('form')
      .get('[placeholder="Host Name"]')
      .type('Jennifer')
      .get('.submit')
      .click()
      .get('.missing-fields')
      .should('be.visible')
  })
})