class Stack{
    constructor(){
        this.item=[];
    }
    add(element){
        this.item.push(element);
    }
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return ;
        }
        return this.item.pop();
    }
    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return ;
        }
        return this.item[this.item.length-1];
    }
    isEmpty(){
        return this.item.length==0;
    }
    printStack(){
        let ans=this.item;
        console.log(ans);
    }
}
let st=new Stack();
st.add(10);
st.add(12);
st.add(13);
st.add(110);
st.add(102);
st.printStack();
console.log(st.peek());
console.log(st.pop());
