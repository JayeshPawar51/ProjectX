import { test, expect } from "@playwright/test";
import { demoHomePage } from "../pages/demoPage/demoHomePage";
import { demoHomeData } from "../data/demoHomeData";

test.beforeEach(async({page})=>{
    const demoHome = new demoHomePage(page);
    await demoHome.goto();

})
test('Verify Click alerts', async ({page}) => {

    const demoHome = new demoHomePage(page);
    await demoHome.clickAlerts();
    await demoHome.acceptAlert();
    await demoHome.typeNameAlert();
    await demoHome.innerMsgAlert();
})
test('Verify Radio Buttons and Checkboxes',async({page}) =>{
    
    const demoHome = new demoHomePage(page);
    await demoHome.selectradio();
    const abc = await demoHome.verifyradioHeader();
    expect(abc).toBeVisible();
    expect(abc).toContainText(demoHomeData.verifySelectText)

    await demoHome.radioButton();
    const verifyRadio = await demoHome.verifyRadioText();
    expect(verifyRadio).toContainText(demoHomeData.radioText);
    
    const disabled = await demoHome.verifyDisabledButton();
    expect(disabled).toBeDisabled();
    
    await demoHome.checkBox();

})
test('Verif Select options',async({page})=>{
  
    const demoHome = new demoHomePage(page);
    await demoHome.goto();
    await demoHome.selectDropdown
    await demoHome.dropdown();
})