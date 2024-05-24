//this for sum of single child parent node
//sum
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
        this.arr=[];
    }
    path(node=null){
        let current;
        if(node!==null){
            //console.log(node);
            current = node;
        }else{
            current = this.root;
        }
            if (current && current.right !== null && current.left === null){
                //console.log("chk2");
                //it is single child condition for right subtree
                this.arr.push(current.key);
                this.path(current.right);
                //current=current.right;
            }else if (current && current.right === null && current.left !== null) {
                //it is single child condition for left subtree
                //console.log("chk3");
                this.arr.push(current.key);
                this.path(current.left);
                //current = current.left;
            }else{
                if(current && current.left!==null && current.right!==null){
                    this.path(current.left);
                    this.path(current.right);
                }
            }
        //console.log(this.arr);
    }
    insert(keys) {
        let current,
            node = new Node(keys);
        if (this.root === null) {
            this.root = node;
        } else {
            current = this.root;
            while (true) {
                if (current.key === keys) {
                    //console.log("Key already exists!");
                    return;
                } else {
                    if (keys < current.key) {
                        if (current.left === null) {
                            current.left = node;
                        } else {
                            current = current.left;
                        }
                    } else {
                        if (current.right === null) {
                            current.right = node;
                        } else {
                            current = current.right;
                        }
                    }
                }
            }
        }
    }
}

let bst1 = new Bst();
bst1.insert(100);
bst1.insert(50);
bst1.insert(150);
bst1.insert(30);
bst1.insert(70);
bst1.insert(130);
bst1.insert(170);
bst1.insert(20);
bst1.insert(40);
bst1.insert(110);
bst1.insert(140);
bst1.insert(160);
bst1.insert(190);
bst1.insert(45);
bst1.insert(145);
bst1.insert(200);
bst1.insert(205);
bst1.insert(46);
bst1.path();
console.log(bst1.arr);
let res=0;
for(let i=0;i<bst1.arr.length;i++){
    res+=bst1.arr[i];
}
console.log(`The sum of the single child parent is:${res}`);