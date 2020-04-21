const loginPage = require('../pages/login.page')
const configData = require('../config');
const constants = require('../constants');

describe('login page feature test', function(){
    it('verify login page title', function(){
        browser.url('https:demo:DMHDemo1@audio.dmhub.de/')
        browser.maximizeWindow()
        const title = loginPage.getPageTitle()
        console.log('login page title is :', title);
        assert.equal(constants.LOGIN_PAGE_TITLE, title, 'title is not found')
        
    })
    it('verify to click on login icon', function(){
        loginPage.verifyToClickOnLoginIcon()
        browser.pause(3000)
        const iconTitle = loginPage.getIconPageText()
        console.log('icon page header is :', iconTitle)
        assert.equal(constants.ICON_PAGE_HEADER, iconTitle, 'icon header not found')

    })
    it('verify to click on login button', function(){
        loginPage.verifyToClickOnLoginBtn()
        browser.pause(3000)
        const loginPageHeader=loginPage.getLoginPageHeader()
        console.log('login page header is :', loginPageHeader)
        assert.equal(constants.LOGIN_PAGE_HEADER, loginPageHeader, 'login page header not found')
    })

     /*
    it('verify sign up link', function(){
       assert.equal(true, loginPage.isSignUpLinkExist(), 'sign up link is not present')
    })
    it('verify login', function(){
        //loginPage.doLogin('naveenanimation30@gmail.com', 'Test@1234')
        loginPage.doLogin(configData.username, configData.password)
     })
     */
})