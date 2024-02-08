// Getting input via STDIN
import { createInterface } from "readline";

const inp = createInterface({
    input: process.stdin
});

const userInput = [];
let count=0;

inp.on("line", (data) => {
        userInput.push(data);
        count++;
        if(count==2){
            inp.close();
        }
    
});




inp.on("close", () => {
    //start-here
    //Your code goes here … replace the below line with your code logic 

   sum(userInput);

    //end-here
});

function sum(userInput){
    console.log(userInput);
    console.log(+userInput[0]+ +userInput[1]);
}