//this is vertical order traversal

class Node{
    constructor(key,hd=0){
        this.key=key;
        this.left=null;
        this.right=null;
        this.hd=hd;
    }
}

function insert(node,key,hd=0){
    if(node===null){
        return new Node(key,hd);
    }
    if(key<node.key){
        node.left=insert(node.left,key,node.hd-1);
    }else{
        node.right=insert(node.right,key,node.hd+1);
    }

    return node;
}

let hdArr=[];
let keyArr=[];

function hdPushToArr(root) {
    if (root != null) {
        hdPushToArr(root.left);
        hdArr.push(root.hd);
        //console.log(root.hd);
        hdPushToArr(root.right);
    }
}
function keyPushToArr(root) {
    if (root != null) {
        keyPushToArr(root.left);
        keyArr.push(root.key);
        //console.log(root.key);
        keyPushToArr(root.right);
    }
}
let root=null;
root=insert(root,100);
root = insert(root, 50);
root = insert(root, 150);
root = insert(root, 30);
root = insert(root, 70);
root = insert(root, 130);
root = insert(root, 170);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 110);
root = insert(root, 140);
root = insert(root, 160);
root = insert(root, 190);
root = insert(root, 45);
root = insert(root, 145);
keyPushToArr(root);
//console.log(keyArr);
//console.log();
hdPushToArr(root);
//console.log(hdArr);

// for(let i=0;i<hdArr.length;i++){
//     console.log(keyArr[i]+":"+hdArr[i]);
// }
//console.log(root);

//object with key as int and value as array

// Creating a hashmap
const hashMap = {};

//push key to hashMap
for (let i = 0; i < hdArr.length; i++) {
    hashMap[hdArr[i]]=[];
}
//push value for each key in hashMap
for (let i = 0; i < keyArr.length; i++) {
    hashMap[hdArr[i]].push(keyArr[i]);
}

console.log(hashMap);
