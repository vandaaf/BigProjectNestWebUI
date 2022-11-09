import * as assert from '@tests/helpers/asserts'
import * as cookie from '@tests/helpers/cookie'
import * as element from '@helpers/elements'
import * as route from '@helpers/route'
import {ROUTES} from '@tests/consts/routes'
// import * as auth from '@tests/data/login.data'
import * as loginPage from '@tests/pages/login.page'
import * as addCust from '@tests/pages/addCustomer.page'

describe('Success to add customer', () => {
    beforeEach(()=>{
        cookie.clearCookies()
        route.visit(ROUTES.login)
        assert.shouldBeVisible(loginPage.bankManagerLogin)
        element.click(loginPage.bankManagerLogin)    
    })
    it('Should successfully to add customer', () => {
        element.click(addCust.addCustOption)
        element.wait(1000)
        element.click(addCust.fNameField)
        element.fillfield(addCust.fNameField, 'Dummy')
        element.click(addCust.lNameField)
        element.fillfield(addCust.lNameField, 'Test')
        element.click(addCust.pCodeField)
        element.fillfield(addCust.pCodeField, '112233')
        element.click(addCust.addCustButton)
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Customer added successfully with customer id :6")
          })
    });
});