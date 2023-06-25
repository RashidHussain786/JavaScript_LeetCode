class Node{
    constructor(data){
        this.value=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    //Add a node at the end of list

addNodeAtTheEnd(nodeData) {
    const newNode = new Node(nodeData);
    if(this.head==null){
        this.head=newNode;
        this.tail=newNode;
    }else{
        this.tail.next=newNode;
        this.tail=newNode;
    }
    this.size++;
}

// Add a node at any posiotion

addNodeAtAnyPosition(index, nodeData){
   if(index<0 || index> this.size){
    throw new Error("Index out of range");
   }
   if(index===0){
     this.addNodeAtTheEnd(nodeData);
   }else if(index===this.size){
    this.addNodeAtTheEnd(nodeData);
   }else{
    const newNode = new Node(nodeData);
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    prevNode.next = newNode;
    newNode.next = currentNode;
    this.size++;
   }
}
// remove a node at specific index

removeNodeAtSpecificIndex(index){
    if(index<0 && index>=this.length){
      throw new Error("Index out of box");
    }
    let currentNode=this.head;
    let prevNode=null;
    let currentIndex=0;
    if(index===0){
      this.head=currentNode.next;
      if(this.size==1){
        this.tail=null;
      }
    }else{
      while(currentIndex<index){
        prevNode=currentNode;
        currentNode=currentNode.next;
        currentIndex++;
      }
      prevNode.next=currentNode.next;
      if (index === this.size - 1) {
        this.tail = prevNode;
      }
    }
    this.size--;
}
toArray() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}



//Example Usages:

const linkedList = new LinkedList();
//console.log(linkedList);
linkedList.addNodeAtTheEnd(200);
linkedList.addNodeAtTheEnd(300);
linkedList.addNodeAtTheEnd(500);
console.log(linkedList.toArray());
linkedList.addNodeAtAnyPosition(2,400);
linkedList.addNodeAtAnyPosition(4,600);
console.log(linkedList.toArray());
linkedList.removeNodeAtSpecificIndex(4);
console.log(linkedList.toArray());