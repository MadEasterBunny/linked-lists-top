import { LinkedList } from "./linked-lists";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
console.log(list.findIndex("dog"));