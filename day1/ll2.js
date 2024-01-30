//Insertion at the beginning
class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    insertFirst(data){
        this.head=new Node(data,this.head);
        this.size++;

    }
}

let a=new LinkedList();
a.insertFirst(100);
a.insertFirst(200);
console.log(a);