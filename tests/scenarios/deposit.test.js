import * as assert from '@tests/helpers/asserts'
import * as cookie from '@tests/helpers/cookie'
import * as element from '@helpers/elements'
import * as route from '@helpers/route'
import {ROUTES} from '@tests/consts/routes'
// import * as auth from '@tests/data/login.data'
import * as loginPage from '@tests/pages/login.page'
import * as customerList from '@tests/pages/customerList'
import * as account from '@tests/pages/account'

describe('Success Deposit', () => {
    beforeEach(()=>{
        cookie.clearCookies()
        route.visit(ROUTES.login)
        assert.shouldBeVisible(loginPage.customerLogin)
    })
    it('Should success to make deposit', () => {
        element.click(loginPage.customerLogin)    
        assert.shouldBeVisible(customerList.customerDropdown)
        element.select(customerList.userSelect, customerList.userName)
        element.click(customerList.loginButton)
        element.click(account.depositOption)
        element.fillfield(account.amountInputField, '5000000')
        element.click(account.depositSubmit)
        assert.textShouldBeVisible(account.responseWording, account.successDeposit)
    });
});