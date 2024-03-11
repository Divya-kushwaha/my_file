import { Locator,Page}from "@playwright/test";
import BasePage from './basePage';

export class LoginPage extends BasePage {

    private readonly page:Page;
    private readonly userNameInbox:Locator;
    private readonly passwordTextBox:Locator;
    private readonly loginButton:Locator;
    
    constructor(page: Page){
          super(page);
        this.page = page;
        this.userNameInbox = page.locator('//input[@placeholder="username"]');
        this.passwordTextBox = page.locator('//input[@placeholder="Password"]');
        this.loginButton = page.locator('//button[@id="login-btn"]');
    }

   async enterUserName(username:string){
    await this.userNameInbox.fill(username);

   }
   async enterpassword(password:string){
    await this.passwordTextBox.fill(password);
   }
   async clcikLoginButton(){
    await this.loginButton.click();




}}