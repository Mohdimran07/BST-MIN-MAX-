class Node
{
  constructor(data)
  {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree
{
  constructor()
  {
    this.root = null;
  }
  
  insert(data)
  {
    let node = new Node(data);
    if(this.root == null)
    {
      this.root = node;
    }else
    {
      this.insertNode(this.root, node);
    }
  }
  
  insertNode(root, newNode)
  {
    if(newNode.data < root.data)
    {
      if(root.left == null)
      {
        root.left = newNode;
      }else
      {
        this.insertNode(root.left, newNode);
      }
    }else if(newNode.data > root.data)
    {
      if(root.right == null)
      {
        root.right = newNode;
      }else
      {
        this.insertNode(root.right, newNode);
      }
    }
  }
  
  getRootNode()
  {
    return this.root; 
  }
  getMin(){
    if(this.root === null){
      throw "Empty tree";
    }
    let currNode = this.root;
    while(currNode.left !== null){
      currNode = currNode.left;
    }
    return currNode.data;
  }

  getMax(){
    if(this.root === null){
      throw "Empty tree";
    }
    let currNode = this.root;
    while(currNode.right !== null){
      currNode = currNode.right;

    }
    return currNode.data;
  }
  
  //traversal
  
  preorder(root)
  {
    if(root != null)
    {
      console.log(root.data); 
      this.preorder(root.left); 
      this.preorder(root.right); 
    }
  }
}


var bst = new BinarySearchTree();

bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(50);
bst.insert(3);
bst.insert(7);
bst.insert(12);

var root = bst.getRootNode();

console.log('getMin');
console.log(bst.getMin());
console.log('getMax');
console.log(bst.getMax());

