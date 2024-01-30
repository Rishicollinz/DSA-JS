//binary search tree in js with dfs inorder,preorder,postorder
class Node{
    constructor(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
}

function insert(node,key){
    if(node===null)
        return new Node(key);
    if(key<node.key){
        node.left=insert(node.left,key);
    }else{
        node.right=insert(node.right,key);
    }
    return node;
}
let inorderArr=[];
let preorderArr=[];
let postorderArr=[];

function inorder(root){
    if(root!=null){
        inorder(root.left);
        inorderArr.push(root.key);
        //console.log(root.key);
        inorder(root.right);
    }
}
function preorder(root) {
    if (root != null) {
        //console.log(root.key);
        preorderArr.push(root.key);
        preorder(root.left);
        preorder(root.right);
    }
}
function postorder(root) {
    if (root != null) {
        postorder(root.left);
        postorder(root.right);
        //console.log(root.key);
        postorderArr.push(root.key);
    }
}
//main code
let root=null;

root=insert(root,50);
root = insert(root, 30);
root = insert(root, 70);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 60);
root = insert(root, 80);

inorder(root);
console.log(inorderArr);
preorder(root);
console.log(preorderArr);
postorder(root);
console.log(postorderArr);