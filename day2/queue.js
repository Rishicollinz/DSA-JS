//queue using array
//pushes from back, pops from front.
class Queue{
    constructor(){
        this.queue=[];
        this.size=0;
    }
    enqueue(data){
        this.queue[this.size]=data;
        this.size++;
    }
    dequeue(){
        if (this.size > 0) {
            // Shift elements to remove the first element (null)
            for (let i = 0; i < this.size - 1; i++) {
                this.queue[i] = this.queue[i + 1];
            }
            // Remove the last element (which is a duplicate of the previous last element)
            this.queue.length = this.queue.length - 1;

            this.size--;
        }else{
            console.log("Queue is empty");
        }
    }
}

let q1=new Queue();
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.dequeue();
q1.dequeue();
console.log(q1);