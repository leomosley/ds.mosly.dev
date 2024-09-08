import { useState } from 'react';
import Stack from '@/lib/stack';

export function useStackState<T>(maxSize: number) {
  const [stack, setStack] = useState(() => new Stack<T>(maxSize));
  const [stackContents, setStackContents] = useState(stack.view());

  const push = (item: T) => {
    stack.push(item);
    setStackContents(stack.view());
  };

  const pop = () => {
    stack.pop();
    setStackContents(stack.view());
  }

  const clear = () => {
    stack.clear();
    setStackContents(stack.view());
  };

  const peek = () => stack.peek();

  const isFull = () => stack.isFull();
  const isEmpty = () => stack.isEmpty();

  return {
    stackContents,
    push,
    pop,
    clear,
    peek,
    isFull,
    isEmpty,
    size: stack.size(),
    maxSize: stack.getMaxSize(),
  };
}
