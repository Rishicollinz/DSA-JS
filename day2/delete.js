//deletion of a node at the beginning

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

    deleteFirst(){
        this.head=this.head.next;
        this.size--;
    }
    insertFirst(data){
        this.head=new Node(data,this.head);
        this.size++;
    }

}

let ll1=new LinkedList();
ll1.insertFirst(10);
ll1.insertFirst(20);
console.log(ll1);
ll1.deleteFirst();
console.log(ll1);
ll1.insertFirst(30);
console.log(ll1);
ll1.deleteFirst();
console.log(ll1);