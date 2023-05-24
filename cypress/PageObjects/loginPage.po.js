class Login {
  loginbtn = ".login-links";
  txtUserName = "#username";
  txtPassword = "#password";
  btnLogin = ".button-login";
  txtwcmsg = ".col-sm-18";
  txtInvLogin = ".woocommerce-error";

  setloginButton() {
    cy.get(this.loginbtn).click();
  }

  setUserName(username) {
    cy.get(this.txtUserName).type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickLogin() {
    cy.get(this.btnLogin).click();
  }

  verifySuccessfulLogin() {
    cy.get(this.txtwcmsg).should("have.text", "Welcome, ");
  }

  verifyUnsuccessfulLogin(errorMessage) {
    cy.get(this.txtInvLogin)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq(errorMessage);
      });
  }

  loginToCustomerPortal() {
    cy.visit("https://www.wafilife.com/");
    cy.viewport(1366, 768);
    cy.get('[style="width:88px;display:inline-block;text-align:left;"]').click();
    cy.get("#username").type("anan.tuba1807@gmail.com");
    cy.get("#password").type("asdf12");
    cy.get(".button-login > .button").click();
  }
}

export default Login;
