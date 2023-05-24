import Login from "../PageObjects/loginPage.po";

describe('WafiLife web login test functionalities', () => {
  const ln = new Login()

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://www.wafilife.com')
    cy.get('[style="width:88px;display:inline-block;text-align:left;"]').click()
    cy.scrollTo('top') // Scroll to the top of the page
  })

  it('should not login with invalid userID', () => {
    cy.fixture('wlcommon').then((data) => {
      ln.setUserName("InvalidUserName")
      ln.setPassword(data.password)
      ln.clickLogin()
      ln.verifyUnsuccessfulLogin()
    })
  })

  it('should not login with invalid password', () => {
    cy.fixture('wlcommon').then((data) => {
      ln.setUserName(data.username)
      ln.setPassword("InvalidPassword")
      ln.clickLogin()
      ln.verifyUnsuccessfulLogin("Error: The username InvalidUserName is not registered on this site. If you are unsure of your username, try your email address instead.")
    });
  }) 

  it('should login with valid userID and password', () => {
    cy.fixture('wlcommon').then((data) => {
      ln.setUserName(data.username) 
      ln.setPassword(data.password) 
      ln.clickLogin() 
      ln.verifyUnsuccessfulLogin("Error: The password you entered for the email address anan.tuba1807@gmail.com is incorrect. Lost your password?'") 
    })
  })
});