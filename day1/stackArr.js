//stack using array

class StackArray{
    constructor(){
        this.stack=[];
        this.size=0;
    }

    push(data){
        this.stack[this.size]=data;
        this.size++;
    }

    pop(){
        if(this.size>0){
            let len = this.size - 1;
            this.stack[len]=null;
        }else{
            console.log("no elements");
        }
        
    }

    print(){
        let len=this.size-1;
        while(len>=0){
            if (this.stack[len] !== null)
                console.log(this.stack[len]);
            len--;
        }
    }
}

let ele=new StackArray();
ele.push(1);
ele.push(2);
ele.pop();
ele.push(3);
ele.push(4);
ele.pop();
ele.print();
