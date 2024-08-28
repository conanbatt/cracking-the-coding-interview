// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  const list = new LinkedList(head);

  const s = new Set();

  list.visit((node) => {
    if (s.has(node.value)) {
      list.remove(node);
    }

    s.add(node.value);
  });

  return list.head;
}
