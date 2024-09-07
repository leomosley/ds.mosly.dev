/**
 * A generic fixed-size Queue implementation.
 * 
 * @template T - The type of elements held in the queue.
 */
class Queue<T> {
  private queue: T[] = [];
  private maxSize: number;

  /**
   * Creates a new fixed-size queue.
   * 
   * @param maxSize - The maximum number of elements the queue can hold.
   * @throws Error if maxSize is less than or equal to 0.
   */
  constructor(maxSize: number) {
    if (maxSize <= 0) {
      throw new Error("Queue size must be greater than 0");
    }
    this.maxSize = maxSize;
  }

  /**
   * Adds an item to the end of the queue.
   * 
   * @param item - The item to enqueue.
   * @throws Error if the queue is full.
   */
  enqueue(item: T): void {
    if (this.isFull()) {
      throw new Error("Queue overflow: cannot enqueue into a full queue");
    }
    this.queue.push(item);
  }

  /**
   * Removes and returns the item at the front of the queue.
   * 
   * @returns The item at the front of the queue, or undefined if the queue is empty.
   */
  dequeue(): T | undefined {
    return this.queue.shift();
  }

  /**
   * Returns the first item in the queue without removing it.
   * 
   * @returns The first item in the queue, or undefined if the queue is empty.
   */
  first(): T | undefined {
    return this.queue[0];
  }

  /**
   * Checks if the queue is empty.
   * 
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  /**
   * Checks if the queue is full.
   * 
   * @returns True if the queue is full, false otherwise.
   */
  isFull(): boolean {
    return this.queue.length >= this.maxSize;
  }

  /**
   * Returns the number of items currently in the queue.
   * 
   * @returns The number of items in the queue.
   */
  size(): number {
    return this.queue.length;
  }

  /**
   * Returns the maximum size of the queue.
   * 
   * @returns The maximum capacity of the queue.
   */
  getMaxSize(): number {
    return this.maxSize;
  }

  /**
   * Clears the queue of all items.
   */
  clear(): void {
    this.queue = [];
  }
}

export default Queue;