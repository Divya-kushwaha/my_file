import { Locator,Page}from "@playwright/test";

export default class LoginPage {

    private readonly page:Page;
    
    constructor(page: Page){

        this.page = page;
    }
//common method to nevigate url
async navigateTO(url:string){
    await this.page.goto(url);
}
async clickElement (element:Locator){
await element.click();
}
//common method to fill out form field
async fillFormField(element:Locator,value:string){
    await element.fill(value);
    //common method to retrive text from an element
    async getElementText(element: Locator):Promise<string>{
return element.innerText()
    }
})
async waitForElementHidden{selector:string}{
    await this.page.waitForSelector,{state:'hidden'});
}
//common method to take screenshot
async takeScreenshot(fileName:string){
    await this.page.screenshot({path:fileName});
    
}


}

}