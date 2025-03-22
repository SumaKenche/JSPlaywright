// loginPage.js
exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#wpName1');
        this.passwordInput = page.locator('#wpPassword1');
        this.loginButton = page.locator('#wpLoginAttempt');
    }
    //wikipedia page
    async gotoLoginPage(){
        await this.page.goto('https://en.wikipedia.org/w/index.php?title=Special:UserLogin');

    }
    
    // Method to login to Wikipedia
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
