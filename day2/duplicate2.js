//removing duplicate in ll;
//it only adds the unique element to the array but doesn't remove it from the linked list

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertBack(data) {
        let curr;
        let newNode = new Node(data);
        if (this.size === 0) {
            this.head = newNode;
            this.size++;
        } else {
            curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
    }

    dupChk() {
        let arr = [];
        let curr = this.head;
        let prev=null;
        while (curr) {
            if (arr.includes(curr.data)) {
                prev.next=curr.next;
                this.size--;
                //if array already has, then remove this node in linked list
                curr = curr.next;
            } else {
                arr.push(curr.data);
                prev=curr;
                curr = curr.next;
            }
        }

        //console.log(arr);

    }

    print() {
        let curr = this.head;
        let arr = [];
        while (curr) {
            arr.push(curr.data);
            curr = curr.next;
        }
        console.log(arr);
    }
}

let ll1 = new LinkedList();
ll1.insertBack(1);
ll1.insertBack(2);
ll1.insertBack(3);
ll1.insertBack(4);
ll1.insertBack(1);
ll1.insertBack(2);
ll1.insertBack(3);
ll1.insertBack(4);
ll1.print();
ll1.dupChk();
ll1.print();
ll1.insertBack(1);
ll1.print();
ll1.dupChk();
ll1.print();