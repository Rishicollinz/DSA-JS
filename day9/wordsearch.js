//user Input
let board=[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
let word="ABCB";

let rowSize=board.length;
let columnSize=board[0].length;

let res=wordSearch(board,word,rowSize,columnSize);
if(res.length>0){
    console.log(true);
}else{
    console.log(false);
}


function wordSearch(m,word,rowSize,columnSize){
    let result=[];
    let viewed=[];

    //populate visited with 0's
    for (let i = 0; i < rowSize; i++) {
        viewed[i] = [];
        for (let j = 0; j < columnSize; j++) {
            viewed[i][j] = 0;
        }
    }

    for(let i=0;i<rowSize;i++){
        for(let j=0;j<columnSize;j++){
            if(m[i][j]==word[0]){
                path(i,j,0,"");
            }
        }
    }

    function path(i,j,wordPos,dir){
        if(wordPos==word.length-1){
            result.push(dir);
            return;
        }
        if (i + 1 < rowSize && m[i + 1][j] == word[wordPos+1] && viewed[i + 1][j] === 0) {
            viewed[i][j] = 1;
            path(i + 1, j, wordPos + 1, dir + "D");
            viewed[i][j] = 0;
        }

        if (j + 1 < columnSize && m[i][j + 1] === word[wordPos+1] && viewed[i][j + 1] === 0) {
            viewed[i][j] = 1;
            path(i, j + 1, wordPos + 1,dir + "R");
            viewed[i][j] = 0;
        }

        if (j - 1 >= 0 && m[i][j - 1] === word[wordPos + 1] && viewed[i][j - 1] === 0) {
            viewed[i][j] = 1;
            path(i, j - 1, wordPos + 1, dir + "L");
            viewed[i][j] = 0;
        }

        if (i - 1 >= 0 && m[i - 1][j] === word[wordPos + 1] && viewed[i - 1][j] === 0) {
            viewed[i][j] = 1;
            path(i - 1, j, wordPos + 1, dir + "U");
            viewed[i][j] = 0;
        }
    }

    return result;
}