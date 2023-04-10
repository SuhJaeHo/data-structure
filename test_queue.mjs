import { Queue } from "./Queue.mjs";

const queue = new Queue();

console.log("enqueue method called");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("front method called");
console.log(queue.front());

console.log("dequeue method called");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.isEmpty());
