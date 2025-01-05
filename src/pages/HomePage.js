import {Page , expect} from '@playwright/test';
import { timeout } from '../../playwright.config';

export default class HomePage{
    #serviceTitleLocator = "Service";

    constructor(page){
        this.page=page;
    }

    async expectServiceTitleToBeVisible(){
        await expect(this.page.getByTitle(this.#serviceTitleLocator)).toBeVisible({timeout: 15000});
    }
}