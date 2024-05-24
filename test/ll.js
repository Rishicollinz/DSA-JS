//normal ll
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
    insertAtFront(data){
        this.head=new Node(data,this.head);
        this.size++;
    }
    insertAtIndex(data,index){
        if(index>=0 && index+1<=this.size+1){
            console.log("there is such index");
            if(index===0){
                this.insertAtFront(data);
            }else{
                
            }
        }else{
            console.log("There is no such index.");
        }
    }
    print(){
        let val=this.head;
        while(val){
            console.log(val.data);
            val=val.next;
        }
    }
}

let ll1=new LinkedList();
ll1.insertAtFront(100);
ll1.insertAtFront(200);
ll1.insertAtFront(300);
ll1.insertAtIndex(400,3);
ll1.print();