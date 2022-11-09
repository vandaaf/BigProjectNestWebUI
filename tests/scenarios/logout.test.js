import * as assert from '@tests/helpers/asserts'
import * as cookie from '@tests/helpers/cookie'
import * as element from '@helpers/elements'
import * as route from '@helpers/route'
import {ROUTES} from '@tests/consts/routes'
// import * as auth from '@tests/data/login.data'
import * as loginPage from '@tests/pages/login.page'
import * as customerList from '@tests/pages/customerList.page'
import * as logout from '@tests/pages/logout.page'

describe('Success to logout', () => {
    beforeEach(()=>{
        cookie.clearCookies()
        route.visit(ROUTES.login)
        assert.shouldBeVisible(loginPage.customerLogin)
        element.click(loginPage.customerLogin)    
    })
    it('Should successfully to logout', () => {
        element.click(loginPage.customerLogin)
        assert.shouldBeVisible(customerList.customerDropdown)
        element.select(logout.nameSelect, logout.name)
        element.click(logout.loginButton)
        element.click(logout.logoutButton)
    });
});