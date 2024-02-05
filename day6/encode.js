//USER INPUT
let text="MY NAME IS";
let row=3;

//COLUMN FIND
let textLen = text.length;
let calc=Math.floor(textLen/row);
let col=calc+(row-1);//col=(textLen/row)+(row-1));

//MATRIX FOR CIPHER
// 2d array
let matrix=[];
//populate the matrix
for(let i=0;i<row;i++){
    matrix[i]=[];
    for(let j=0;j<col;j++){
        matrix[i][j]=0;
    }
}
//console.log(matrix);

let currLetter;
let colchk=1;
for(let i=0,jrow=0,jcol=0;i<text.length;i++){
    currLetter=text[i];
    if(jrow<=row && jcol<=col){
        if(currLetter==' '){
            matrix[jrow][jcol]='*';
        }else{
            matrix[jrow][jcol] = currLetter;
        }
        
        if(jrow==row-1){
            jcol=colchk;
            colchk++;
            jrow=0;
        }else{
            jrow++;
            jcol++;
        }
    }
}
//console.log(matrix);

//changing the 0 for * before the diagonal;
for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(i>j){//upper triangular matrix
            matrix[i][j]="*";
        }
    }
}
//console.log(matrix);

let res="";

for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(matrix[i][j]!=0){
            res+=matrix[i][j];
        }
    }
}

console.log(res);