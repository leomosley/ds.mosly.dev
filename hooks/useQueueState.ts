import { useState } from 'react';
import Queue from '@/lib/queue';

export function useQueueState<T>(maxSize: number) {
  const [queue] = useState(() => new Queue<T>(maxSize));
  const [queueContents, setQueueContents] = useState(queue.view());

  const enqueue = (item: T) => {
    queue.enqueue(item);
    setQueueContents(queue.view());
  };

  const dequeue = () => {
    queue.dequeue();
    setQueueContents(queue.view());
  };

  const clear = () => {
    queue.clear();
    setQueueContents(queue.view());
  };

  const first = () => queue.first();

  const isFull = () => queue.isFull();
  const isEmpty = () => queue.isEmpty();

  return {
    queueContents,
    enqueue,
    dequeue,
    clear,
    first,
    isFull,
    isEmpty,
    size: queue.size(),
    maxSize: queue.getMaxSize(),
  };
}
