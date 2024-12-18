class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class Tree {
    constructor(){
      this.root=null;
    }
    inOrder(node){
        if(node===null){
            return;
        }
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
    inOrderTransversal(){
        let node=this.root;
        return this.inOrder(node);
    }

    preOrder(node){
        if(node===null){
            return;
        }
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    preOrderTransversal(){
        let node=this.root;
        return this.preOrder(node);
    }

    postOrderTransversal(){
        let node=this.root;
        return this.postOrder(node);
    }
    postOrder(node) {
        if(node===null){
            return;
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }

    levelOrderTraversal(){
        if(this.root===null){
            return;
        }
        const queue=[this.root];
        while(queue.length>0) {
            const current=queue.shift();
            console.log(current.data);
            if(current.left!==null){
                queue.push(current.left);
            }
            if(current.right!==null){
                queue.push(current.right);
            }
        }
    }

    dfs(){
        return this.preOrder(this.root);
    }
    
    insert(data){
        const newNode=new Node(data);
        if(this.root===null){
            this.root=newNode;
            return;
        }
        const queue=[this.root];
        while(queue.length>0){
            const current=queue.shift();
            if(current.left===null){
                current.left=newNode;
                return;
            } 
            else{
                queue.push(current.left);
            }
            if(current.right===null){
                current.right=newNode;
                return;
            } 
            else{
                queue.push(current.right);
            }
        }
    }
}
let tree=new Tree();
tree.insert(10);
tree.insert(11);
tree.insert(12);
tree.insert(13);
tree.insert(14);
tree.insert(15);
tree.insert(16);
// tree.inOrderTransversal();
// tree.postOrderTransversal();
// tree.preOrderTransversal();
// tree.levelOrderTraversal();
tree.dfs();