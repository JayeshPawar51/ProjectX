import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Mouse actions on vinothqaacademy', async ({ page }) => {
     // Navigate to the page
    await page.goto('https://vinothqaacademy.com/mouse-event');

    // ===== Page scrolling =====
    await page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight));
    await page.evaluate(()=> window.scrollTo(0, 0));
    await page.locator('//i[@class="fab fa-youtube"]').scrollIntoViewIfNeeded();

    //page scroll by mouse action
    await page.mouse.wheel(200,200);
    await page.mouse.move(1000,1000);
    

    // ===== DRAG AND DROP =====
    await page.dragAndDrop('#draggableElement','#droppableElement');
 

     // ===== MOUSE HOVER =====
    await page.hover('//input[@title="Enter First Name"]');

     // ===== DOUBLE CLICK =====
    
    await page.dblclick('#dblclick');
    const doubleClickMessage = await page.locator('#demo').textContent();
    console.log('Double click message:', doubleClickMessage?.trim());

    // ===== RIGHT CLICK =====
    await page.locator('#rightclick').click({button:'right'});

});
test('Keyboard actions on vinothqaacademy', async ({ page }) => {
  // Navigate to the page
    await page.goto('https://vinothqaacademy.com/demo-site-keyboard-events/');

    await page.keyboard.press('PageDown');
    await page.keyboard.press('PageUp');
    
    await page.locator('#search-box').type('Jayesh',{delay:50});
    await page.locator('#search-box').click();
    await page.keyboard.press('Backspace');
    
    await page.locator('#search-box').type('ABCD',{delay:50});

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');
});

test('Datepicker actions on vinothqaacademy', async ({ page }) => {
    // Navigate to the page
        await page.goto('https://vinothqaacademy.com/demo-site/');

        //await page.locator('#vfb-18').scrollIntoViewIfNeeded();
        //await page.locator('#vfb-18').fill('05/01/2025');
        await page.locator('#vfb-18').click();
        await page.locator('#ui-datepicker-div').click();
        await page.locator('#ui-icon ui-icon-circle-triangle-w').click();
      
});

test('New window and page actions on vinothqaacademy', async ({ page, context }) => {
    // Navigate to the page
        await page.goto('https://vinothqaacademy.com/multiple-windows/');

    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        await page.click('#button1'),
        //page.click('#newbrowserwindow123'),
        
    ]);

    await newPage.getByPlaceholder('Name').fill('Jayesh');
    await newPage.getByPlaceholder('Role').fill('QA');
    await newPage.getByPlaceholder('Email Address').fill('Jayesh@test.com');
    await newPage.getByPlaceholder('Location').fill('Pune');
    await newPage.getByPlaceholder('Department').fill('ITQE');
    await newPage.getByRole('button',{name:'Add Row'}).click();

});
test('New browser tab on vinothqaacademy', async ({ page, context }) => {
    // Navigate to the page
        await page.goto('https://vinothqaacademy.com/multiple-windows/');

    const [newTab] = await Promise.all([

        context.waitForEvent('page'),
        await page.click('#button1'),
        //page.click('#newbrowserwindow123'),
        
    ]);

    await newTab.getByPlaceholder('Name').fill('Niket');
    await newTab.getByPlaceholder('Role').fill('QA');
    await newTab.getByPlaceholder('Email Address').fill('Jayesh@test.com');
    await newTab.getByPlaceholder('Location').fill('Pune');
    await newTab.getByPlaceholder('Department').fill('ITQE');
    await newTab.getByRole('button',{name:'Add Row'}).click();

});
test('File download on vinothqaacademy', async ({ page }) => {
    // Navigate to the page
        await page.goto('https://demoqa.com/upload-download');

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('#downloadButton').click(),

        ]);

        //const abc = await page.locator('#downloadButton').click();

        await download.saveAs('Downloads/jayesh.jpeg');
        expect(fs.existsSync('Downloads/jayesh.jpeg')).toBe(true);
      
});
test('File upload on vinothqaacademy', async ({ page }) => {
    // Navigate to the page
        await page.goto('https://demoqa.com/upload-download');

        const filePath = path.resolve(__dirname,'../Downloads/jayesh.jpeg');

        console.log(filePath);

        await page.setInputFiles('input[type="file"]',filePath);

        await page.click('input[type="file"]');
});

test('Web Table on vinothqaacademy', async ({ page }) => {
    // Navigate to the page
        await page.goto('https://demoqa.com/webtables');

        const rows = await page.locator('//div[@class="rt-tr-group"]');
        const rowCount = await rows.count();
        console.log(`Total rows :${rowCount}`);

        for(let i=0; i < rowCount; i++){
            const currRow = rows.nth(i);
           
            // const column = await page.locator('//div[@class="rt-tr-group"][i]//div[@class="rt-td"]');
            // console.log(`Current column is  :${column}`);
            // const columnCount = await column.count();
            // console.log(`Total columns :${columnCount}`);
            // //const col1 = await currRow.locator('rt-td').nth(0).innerText();
            // //for (let j=0;j<)

            const col1 = await currRow.locator('rt-td').nth(5).innerText();
            console.log(`Total columns :${col1}`);
            expect(col1).toBe('Insurance');
        }
    });