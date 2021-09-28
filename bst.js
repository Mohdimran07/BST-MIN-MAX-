class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  
  class BinarySeachTree {
        constructor(){
          this.root = null
        }
    
        insert(value){
            const node = this.root
            if(node === null){
                this.root = new Node(value);
                return this.root;
            } else {
                const searchTree = function(node){
                    if(value < node.value){
                        if(node.left === null){
                            node.left = new Node(value);
                            return node.left;
                        }else if(node.left !== null){
                            return searchTree(node.left);
                        }
                    } else if(value > node.value){
                        if(node.right === null){
                            node.right = new Node(value);
                            return node.right;
                        }else if(node.right !== null){
                            return searchTree(node.right);
                        }
                    } else {
                        return null;
                    }
                };
                return searchTree(node);
            }
        }
         
          

      find(value){
       let curr = this.root;
        while(curr.value !== value){
            if(value < curr.value){
                 curr = curr.left;
            } else {
                curr = curr.right;
            }
            if(curr === null){
                return null
            }
        }
        return curr;
        }
    }
const Bst = new BinarySeachTree();
Bst.insert(50);
Bst.insert(8);
Bst.insert(55);
Bst.insert(36);
Bst.insert(58)

console.log(Bst.find(55));
console.log(Bst);