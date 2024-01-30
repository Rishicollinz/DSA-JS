//queue deleting at front using ll

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

    enqueue(data){
        let curr;
        if(this.size===0){
            this.head=new Node(data,null);
            this.size++;
        }else{
            let newNode=new Node(data,null);
            curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=newNode;
            this.size++;
        }
    }

    dequeue(){
        if(this.size===0){
            console.log("Queue is empty");
        }else{
            this.head=this.head.next;
            this.size--;
        }
    }

    print(){
        let curr=this.head;
        let output=[];
        while(curr){
            output.push(curr.data);
            curr=curr.next;
        }
        console.log(output);
    }
}

let q1=new LinkedList();
q1.enqueue(2);
q1.enqueue(3);
q1.dequeue();
q1.enqueue(4);
q1.dequeue();
q1.print();