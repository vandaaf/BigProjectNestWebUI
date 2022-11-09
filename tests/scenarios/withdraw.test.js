import * as assert from '@tests/helpers/asserts'
import * as cookie from '@tests/helpers/cookie'
import * as element from '@helpers/elements'
import * as route from '@helpers/route'
import {ROUTES} from '@tests/consts/routes'
// import * as auth from '@tests/data/login.data'
import * as loginPage from '@tests/pages/login.page'
import * as customerList from '@tests/pages/customerList.page'
import * as account from '@tests/pages/account.page'

describe('Success Withdraw', () => {
    beforeEach(()=>{
        cookie.clearCookies()
        route.visit(ROUTES.login)
        assert.shouldBeVisible(loginPage.customerLogin)
        element.click(loginPage.customerLogin)    
        assert.shouldBeVisible(customerList.customerDropdown)
        element.select(customerList.userSelect, customerList.userName)
        element.click(customerList.loginButton)
        element.click(account.depositOption)
        element.fillfield(account.amountInputField, '5000000')
        element.click(account.depositSubmit)
    })
    it('Should successfully make a withdrawal', () => {
        element.click(account.withdrawalOption)
        element.wait(1000)
        element.click(account.amountInputField)
        element.fillfield(account.amountInputField, '25000')
        element.click(account.withdrawalSubmit)
        assert.textShouldBeVisible(account.responseWording, account.successWithdraw)
    });
});

describe('Failed Withdraw', () => {
    beforeEach(()=>{
        cookie.clearCookies()
        route.visit(ROUTES.login)
        assert.shouldBeVisible(loginPage.customerLogin)
        element.click(loginPage.customerLogin)    
        assert.shouldBeVisible(customerList.customerDropdown)
        element.select(customerList.userSelect, customerList.userName)
        element.click(customerList.loginButton)
        element.click(account.depositOption)
        element.fillfield(account.amountInputField, '5000000')
        element.click(account.depositSubmit)
    })
    
    it('Should failed make a withdrawal', () => {
        element.click(account.withdrawalOption)
        element.wait(1000)
        element.click(account.amountInputField)
        element.fillfield(account.amountInputField, '999999999999999')
        element.click(account.withdrawalSubmit)
        assert.textShouldBeVisible(account.responseWording, account.failedWithdraw)
    });
});