class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(10)
node1.next = node2
node2.next=node3

let list = new LinkedList(node1)

console.log(list.head.data)
console.log(list.head.next.next.data)