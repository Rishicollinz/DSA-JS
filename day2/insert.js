//ll insertion at specific index

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

    insertAt(data,index){
        if(index<=this.size){
            let curr = this.head;
            let prev;
            let count = 0;
            while (count < index) {
                prev = curr;
                curr = curr.next;
                count++;
            }
            let node = new Node(data);
            prev.next = node;
            node.next = curr;
            this.size++;
        }else{
            console.log("index is not valid");
        }
        
    }

    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }

}

let ll1=new LinkedList();
ll1.insertFirst(5);
ll1.insertFirst(15);
ll1.insertAt(10,1);
ll1.print();

ll1.insertAt(20,4);
ll1.print();