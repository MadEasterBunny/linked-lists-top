import { LinkedList } from "./linked-lists";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
console.log(list.size());
console.log(list.head());
console.log(list.tail());
