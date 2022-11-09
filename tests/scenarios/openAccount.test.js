import * as assert from '@tests/helpers/asserts'
import * as cookie from '@tests/helpers/cookie'
import * as element from '@helpers/elements'
import * as route from '@helpers/route'
import {ROUTES} from '@tests/consts/routes'
// import * as auth from '@tests/data/login.data'
import * as loginPage from '@tests/pages/login.page'
import * as openAccount from '@tests/pages/openAccount.page'
import * as customerList from '@tests/pages/customerList.page'

describe('Success to aopen account', () => {
    beforeEach(()=>{
        cookie.clearCookies()
        route.visit(ROUTES.login)
        assert.shouldBeVisible(loginPage.bankManagerLogin)
        element.click(loginPage.bankManagerLogin)    
    })
    it('Should successfully to open account', () => {
        element.click(openAccount.opAccountOption)
        assert.shouldBeVisible(openAccount.custDropdown)
        element.select(openAccount.custSelect, openAccount.custName)
        element.wait(1000)
        element.select(openAccount.currencySelect, openAccount.currency)
        element.click(openAccount.processSubmit)
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Account created successfully with account Number :1016")
          })
    });
});