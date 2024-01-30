//stack using linkedlist
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

    push(data){
        this.head=new Node(data,this.head);
    }

    pop(){
        this.head=this.head.next;
    }

    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll1=new LinkedList();
ll1.push(100);
ll1.push(200);
ll1.push(300);
ll1.pop();
ll1.print();