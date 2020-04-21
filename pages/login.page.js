const elementUtil = require('../util/elementUtil');
const constants = require('../constants');


class LoginPage {
    //page locators:
    /*
    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginBtn() { return $('#loginBtn') }
    get signUpLink() { return $('=Sign up') }
*/
get loginIcon() {return $('div.icon_click_container')}
get loginIconHeader(){return $("//p[contains(text(),'Schon ein Konto?')]")}
get loginBtn() {return $('=Login')}
get loginPageHeader() {return $("//p[contains(text(),'Willkommen zurück! Bitte geben Sie Ihre Zugangsdaten ein:')]")}


    //page actions:

    verifyToClickOnLoginIcon(){
    elementUtil.doClick(this.loginIcon)
    }
    verifyToClickOnLoginBtn(){
    elementUtil.doClick(this.loginBtn)
    }
    getPageTitle() {
        return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE)
    }
    getIconPageText(){
        return elementUtil.doGetText(this.loginIconHeader)
    }
    getLoginPageHeader(){
        return elementUtil.doGetText(this.loginPageHeader)
    }
    /*
    isSignUpLinkExist() {
        return elementUtil.doIsDisplayed(this.signUpLink)
    }
    doLogin(emailID, pwd) {
        elementUtil.doSetValue(this.username, emailID)
        elementUtil.doSetValue(this.password, pwd)
        elementUtil.doClick(this.loginBtn)
    }
    */
}
module.exports = new LoginPage()