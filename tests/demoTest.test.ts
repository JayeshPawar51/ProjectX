import { test, expect } from "@playwright/test";
import { demoHomePage } from "../pages/demoPage/demoHomePage";


test('Click alerts', async ({page}) => {

    const demoHome = new demoHomePage(page);
    await demoHome.goto();
    await demoHome.clickAlerts();
    await demoHome.acceptAlert();
    await demoHome.typeNameAlert();
    await demoHome.innerMsgAlert();



})