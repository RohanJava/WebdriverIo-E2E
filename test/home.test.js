const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')
const configData = require('../config');
const constants = require('../constants');

describe('home page feature test', function(){


    it('verify home page title', function(){
        browser.url('/')
        browser.maximizeWindow()
        loginPage.doLogin(configData.username, configData.password)
        const title = homePage.getPageTitle()
        console.log('home page title is', title)
        assert.equal(constants.HOME_PAGE_TITLE, title, 'title is not found')
    })



})