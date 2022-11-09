import * as assert from '@tests/helpers/asserts'
import * as cookie from '@tests/helpers/cookie'
import * as element from '@helpers/elements'
import * as route from '@helpers/route'
import {ROUTES} from '@tests/consts/routes'
// import * as auth from '@tests/data/login.data'
import * as loginPage from '@tests/pages/login.page'
import * as manager from '@tests/pages/manager.page'

describe('Success Search User', () => {

    beforeEach(() => {
        cookie.clearCookies()
        route.visit(ROUTES.login)
        assert.shouldBeVisible(loginPage.bankManagerLogin)
        element.click(loginPage.bankManagerLogin)
    });
    it('Should successfull to get the list of users from the search results ', () => {
        element.click(manager.customersOption)
        element.fillfield(manager.searchField, 'Hermoine')
        assert.textShouldBeVisible(manager.firstNameCol, manager.firstNameContent)
        assert.textShouldBeVisible(manager.lastNameCol, manager.lastNameContent)
    });
});

describe('Success Delete User', () => {
    beforeEach(() => {
        cookie.clearCookies()
        route.visit(ROUTES.login)
        assert.shouldBeVisible(loginPage.bankManagerLogin)
        element.click(loginPage.bankManagerLogin)
    });

    it('Should successfull to delete an existing user', () => {
        element.click(manager.customersOption)
        element.fillfield(manager.searchField, 'albus')
        assert.textShouldBeVisible(manager.firstNameCol, 'Albus')
        element.click(manager.deleteButton)

        assert.elementShouldNotBeVisible(manager.firstNameCol)
        assert.textShouldNotBeVisible(manager.table, 'albus')
    });
});