import PreOrder from "../PageObjects/preOrder.po"
import Login from "../PageObjects/loginPage.po"

describe('WAFILIFE web dashboard page all menus availability and broken link test',  function(){
const preOrder=new PreOrder()
const login=new Login()
this.beforeAll(() => {
cy.window().then(win => win.sessionStorage.clear())
cy.clearCookies()
cy.clearLocalStorage()
login.loginToCustomerPortal()
cy.scrollTo('top') 

})

it('Should have My Accounts menu and redirecting to target page', function() {
    preOrder.verifymypreorder()
})


})