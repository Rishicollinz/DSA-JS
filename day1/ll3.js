// Construct Single Node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }


    // Insert at index
    insertAt(data, index) {
        //  If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    insertAtBefore(data,index){
        this.insertAt(data,index-1);
    }

    insertAtAfter(data,index){
        this.insertAt(data, index+1);
    }

    // Print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertAt(500, 3);
ll.insertAtAfter(400,3);
ll.insertAtBefore(600,3)

ll.printListData();
