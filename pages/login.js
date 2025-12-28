exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Username' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: ' Login' });
    }


    //Creating one function for Login unlike the one above  
    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    } 

    async logout(){
        await this.page.getByRole('link', { name: 'Logout' }).click();
    }

}