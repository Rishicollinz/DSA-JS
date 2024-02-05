//Bst height calculation

class Node{
    constructor(key,height=0){
        this.key=key;
        this.left=null;
        this.right=null;
        this.height=height;
    }
}

class Bst{
    constructor(){
        this.root=null;
    }
    insert(keys){
        let current,
        node=new Node(keys);
        if(this.root===null){
            this.root=node;
        }else{
            current=this.root;
            while(true){
                if(current.key===keys){
                    //console.log("Key already exists!");
                    return;
                }else{
                    if(keys<current.key){
                        if(current.left===null){
                            current.left=node;
                        }else{
                            current=current.left;
                        }
                    }else{
                        if(current.right===null){
                            current.right=node;
                        }else{
                            current=current.right;
                        }
                    }
                }
            }
        }
    }
    heightCalc(){
        
    }
}

let bst1=new Bst();
bst1.insert(10);
bst1.insert(5);
bst1.insert(15);
bst1.heightCalc();
console.log(bst1);

