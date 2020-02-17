module.exports = {
  'login page renders elements': function (browser) {
    const loginPage = browser.page.LoginPage()
    console.log(loginPage)

    loginPage
      .navigate()
      .waitForElementVisible('@app', 500)
      .assert.visible('@usernameInput')
      .assert.visible('@passwordInput')
      .assert.visible('@submitButton')
      .assert.hidden('@formError')

    browser.end()
  }
}
