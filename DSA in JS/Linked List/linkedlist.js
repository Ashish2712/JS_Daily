// A linked list is a collection of nodes where each node contains a value and a reference to the next node in the sequence.


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node(1);  // object creation will initalise the constructor and create a node with next node as null
let node2 = new Node(2);
node1.next = node2;   // creation of next node as node2


console.log(node1);
console.log(node2);
