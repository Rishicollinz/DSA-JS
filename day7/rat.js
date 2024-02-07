function ratInMaze(m, n) {
    let viewed = [];
    let result = [];

    for (let i = 0; i < n; i++) {
        viewed[i] = [];
        for (let j = 0; j < n; j++) {
            viewed[i][j] = 0;
        }
    }

    path(0, 0, "");

    function path(i, j, dir) {
        if (i === n - 1 && j === n - 1) {
            result.push(dir);
            return;
        }
        // console.log(result)
        if (i + 1 < n && m[i + 1][j] === 1 && viewed[i + 1][j] === 0) {
            viewed[i][j] = 1;
            path(i + 1, j, dir + "D");
            viewed[i][j] = 0;
        }

        if (j + 1 < n && m[i][j + 1] === 1 && viewed[i][j + 1] === 0) {
            viewed[i][j] = 1;
            path(i, j + 1, dir + "R");
            viewed[i][j] = 0;
        }

        if (j - 1 >= 0 && m[i][j - 1] === 1 && viewed[i][j - 1] === 0) {
            viewed[i][j] = 1;
            path(i, j - 1, dir + "L");
            viewed[i][j] = 0;
        }

        if (i - 1 >= 0 && m[i - 1][j] === 1 && viewed[i - 1][j] === 0) {
            viewed[i][j] = 1;
            path(i - 1, j, dir + "U");
            viewed[i][j] = 0;
        }
    }

    //return result;
    result.sort();
    return result;
}

let m = [
    [1, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1]
];
let n = m.length;

let result=ratInMaze(m,n);
console.log(result);
//sort for length of each path;
result.sort((a,b)=>a.length-b.length);
console.log(result);

console.log("Minimum path:");
let min=result[0].length;
for(path of result){
    if(path.length==min){
        console.log(path);
    }
}