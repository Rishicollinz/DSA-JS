let a=1,b=1;
rec(a,b);

function rec(a,b){
    if(a<10 && b<10){
        console.log("a:"+a);
        a++;
        rec(a,b);
        console.log("b:"+b)
        b++
        rec(a,b);
    }else
        return;
}