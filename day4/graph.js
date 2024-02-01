//this is graph with adjacency list

class Graph{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set();//empty set, we can also use array
        }
    }
    addEdge(vertexA,vertexB){
        if(!this.adjacencyList[vertexA]){//to chk if vertex a is avail, if not create one
            this.addVertex(vertexA);
        }
        if(!this.adjacencyList[vertexB]){
            this.addVertex(vertexB);//similarly for vertex b
        }

        this.adjacencyList[vertexA].add(vertexB);//adding edge for a->b
        this.adjacencyList[vertexB].add(vertexA);//b->a
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->"+[...this.adjacencyList[vertex]])
        }
    }

}

let graph=new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A","B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
graph.display();