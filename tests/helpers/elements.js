export function get(selector) {
    return cy.get(selector);
}

export function fillField(selector, value) {
    return cy.get(selector).clear().type(value).should('have.value', value);
}

export function click(selector, ...args) {
    return cy.get(selector).click(...args);
}

export function select(selector, val) {
    return cy.get(selector).select(val)   
}

export function fillfield(selector, val) {
    return cy.get(selector).type(val)
}