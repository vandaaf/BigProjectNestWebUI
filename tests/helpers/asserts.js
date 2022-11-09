export function shouldBeVisible(selector, timeout = 10000){
    cy.get(selector, {timeout}).should("be.visible");
}

export function textShouldBeVisible(selector, val, timeout = 10000){
    cy.get(selector, {timeout}).should("be.visible").should('have.text', val);
}

export function elementShouldNotBeVisible(selector, timeout = 10000){
    cy.get(selector, {timeout}).should("not.exist")
}

export function textShouldNotBeVisible(selector, val,  timeout = 10000){
    cy.get(selector, {timeout}).should("not.have.text", val)
}