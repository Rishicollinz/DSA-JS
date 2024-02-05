//this is deleting a node in bst using js
//deletion for leaf node;
class Node{
    constructor(key){
        this.key=key;
        this.right=null;
        this.left=null;
    }
}

class Bst{
    constructor(){
        this.root=null;
    }
    insert(key){
        let curr;
        let node=new Node(key);
        if(this.root===null){
            this.root=node;
        }else{
            curr=this.root;
            while(true){
                if(curr.key===key){
                    return;
                }else{
                    if(key<curr.key){
                        if(curr.left===null){
                            curr.left=node;
                        }else{
                            curr=curr.left;
                        }
                    }else{
                        if (curr.right === null) {
                            curr.right = node;
                        } else {
                            curr = curr.right;
                        }
                    }
                }
            }
        }
    }

    delete(delVal){
        let curr=this.root;
        if(curr===null){
            console.log("There is nothing to delete");
        }else{
            
        }
    }

    print(curr=this.root){
        if(!curr){
            return
        }else{
            this.print(curr.left);
            console.log(curr.key);
            this.print(curr.right);
        }
    }
}

let bst1=new Bst();
bst1.insert(100);
bst1.insert(50);
bst1.insert(150);
bst1.insert(30);
bst1.print();
bst1.delete(30);
bst1.print();