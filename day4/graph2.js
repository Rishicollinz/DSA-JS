//this is graph implementation using adjacency matrix;

class Graph{
    constructor(){
        this.adjMat=[];
        this.verArr=[];
    }
    addVertex(vertex){
        if(!this.verArr.includes(vertex)){
            this.verArr.push(vertex);
            let arr=[];
            this.adjMat.push(arr);
        }else{
            console.log("vertex already exists!");
        }
    }

    addEdge(vertexA,vertexB){
        let vertexAIndex=this.verArr.indexOf(vertexA);
        let vertexBIndex=this.verArr.indexOf(vertexB);
        this.adjMat[vertexAIndex][vertexBIndex]=1;//A->B
        this.adjMat[vertexBIndex][vertexAIndex] = 1;//B->A
    }

    populate(){
        let vertexNo=this.verArr.length;
        for(let i=0;i<vertexNo;i++){
            for(let j=0;j<vertexNo;j++){
                if(this.adjMat[i][j]!=1){
                    this.adjMat[i][j]=0;
                }
            }
        }

    }
}


let graph=new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A","A");
graph.addEdge("B","B");
graph.addEdge("C","C");
graph.addEdge("A","B");
graph.addEdge("B","C");
graph.addEdge("C","A");
graph.addEdge("D","A");
graph.populate();
console.log(graph.adjMat);