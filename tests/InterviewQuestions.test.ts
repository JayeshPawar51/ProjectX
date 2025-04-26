import test from "@playwright/test";
import { InterviewQPage } from "../pages/InterviewQPage";
import { InterviewArrayPage } from "../pages/InterviewArrayPage";

test('String Reverse', async ({ page }) => {
    const inputString = "My Name Is Jayesh";
    const reverse = new InterviewQPage(inputString);
    //String Reverse
    console.log("String reverese ", reverse.reverseString());

    
    console.log("String reverese ", reverse.getReveresed());

    console.log("String reverese ", reverse.reverseWord());


    //Find out maximum number from array
    //Sort the array
    const arrr = [2,5,7,8];
    const abc = ['Zoya','Ajay','Tabbu','Bipin']
    const arrayPro = new InterviewArrayPage();
    console.log("Max number from array is : ", arrayPro.processArray(arrr) )
    
    console.log("Array is sorted as : ", arrayPro.processArray(abc) )
      
      
});
