//87/98 test cases passed
let heights=[2,1,5,6,2,3];
//let heights = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    let res;
    //this is for getting the biggest individual element area;
    let bigIndividual = indiHeight(heights);
    let oarr=[];
    for (let i = 0; i < heights.length; i++) {
        let element = heights[i];
        let width = 1;
        let height = element;
        let area = [];
        for (let j = i + 1; j < heights.length; j++) {
            width++;
            height=Math.min(height,heights[j]);
            area.push(height*width);
        }
        //console.log(area);
        oarr.push(Math.max(...area));
    }
    //console.log(oarr);
    let bigc = Math.max(...oarr);
    //console.log(Math.max(...oarr));

    if(bigIndividual>bigc){
        console.log(bigIndividual);
    }else{
        console.log(bigc);
    }
   // return res;

function indiHeight(heights) {
    let big = Math.max(...heights);
    return big * 1;
}