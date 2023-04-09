import { LinkedList } from "./LinkedList.mjs";

const list = new LinkedList();

console.log("insertAt method called");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();

console.log("clear method called");
list.clear();
list.printAll();

console.log("insertLast method called");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll();

console.log("deletedAt method called");
list.deleteAt(0);
list.printAll();
list.deleteAt(1);
list.printAll();

console.log("deleteLast method called");
list.insertLast(5);
list.deleteLast();
list.deleteLast();
list.deleteLast();
list.printAll();

console.log("getNodeAt method called");
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

const secondNode = list.getNodeAt(2);
console.log(secondNode);
