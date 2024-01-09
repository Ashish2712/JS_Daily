// A tree is a hierarchical data structure consisting of nodes connected by edges. 
// Each node has a parent and zero or more children.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

let rootNode = new TreeNode(1);
let childNode1 = new TreeNode(2);
let childNode2 = new TreeNode(3);
rootNode.addChild(childNode1);
rootNode.addChild(childNode2);


console.log(rootNode); // prints an object containing the details of all the nodes in a tree
/*
TreeNode {
  value: 1,
  children: [
    TreeNode { value: 2, children: [] },
    TreeNode { value: 3, children: [] }
  ]
}
*/