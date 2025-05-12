import {test,expect} from '@playwright/test';
import { flipBase } from '../pages/flipkart/flipkartBasePage';
import { flipMainPage } from '../pages/flipkart/flipMainPage';

test('Search Laptop',async({page})=>{

    const flipScr = new flipMainPage(page);

    flipScr.goto();
    flipScr.searchBox();
    


})