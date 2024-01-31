class Node{
    constructor(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
}

class Bst{
    constructor(){
        this.root=null;
    }
    lca(a,b){
        let pathA=this.path(a);
        let pathB=this.path(b);
        let len=Math.min(pathA.length,pathB.length);
        let res=null;
        for(let i=len-1;i>=0;i--){
            if(pathA[i]===pathB[i]){
                res=pathA[i];
                break;
            }else{
                continue;
            }
        }
        console.log(`The Least Common Ancestor for ${a} and ${b} is:${res}`);
    }
    path(value){
        let current = this.root;
        let arr=[];
        while(current){
            if(value===current.key){
                current= false;
            }
            else if (value < current.key) {
                arr.push(current.key);
                current = current.left;
            } else {
                arr.push(current.key);
                current = current.right;
            }
        }
        return arr;
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
bst1.lca(140,190);