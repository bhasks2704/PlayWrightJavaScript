import {Page} from '@playwright/test';
import HomePage from "./HomePage";

export default class LoginPage{
    #usernameInputSelector = "#username";
    #passwordInputSelector = "#password";
    #loginButtonSelector = "#Login";
    // let page = new Page();
    constructor(page){
        this.page = page;

    }

    async navigateToLoginPage(){
        await this.page.goto("/");
    }

    async fillUsername(username){
        await this.page.locator(this.#usernameInputSelector).fill(username);
    }

    async fillPassword(password){
        await this.page.locator(this.#passwordInputSelector).fill(password);
    }

    async clickLoginButton(){
        await this.page
        .locator(this.#loginButtonSelector)
        .click()
        .catch((error)=>{
            console.error(`Error Clicking login Button: ${error}`);
            throw error;
        });

        const homepage = new HomePage(this.page);
        return homepage;
    }
}