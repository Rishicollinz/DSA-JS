//Height of the bst

class Node {
    constructor(key, hd = 0) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.hd = hd;
    }
}

function insert(node, key, hd = 0) {
    if (node === null) {
        return new Node(key, hd);
    }
    if (key < node.key) {
        node.left = insert(node.left, key,hd+1);
    } else {
        node.right = insert(node.right, key,hd+1);
    }

    return node;
}




let hdArr = [];
function hdPushToArr(root) {
    if (root != null) {
        hdPushToArr(root.left);
        hdArr.push(root.hd);
        //console.log(root.hd);
        hdPushToArr(root.right);
    }
}
let root = null;
root = insert(root, 100);
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

root = insert(root, 200);
root = insert(root, 250);

hdPushToArr(root);
console.log("Height of the tree:"+Math.max(...hdArr));