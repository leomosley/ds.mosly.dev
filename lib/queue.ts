/**
 * A generic Queue implementation.
 * 
 * @template T - The type of elements held in the queue.
 */
class Queue<T> {
  private queue: T[] = [];

  /**
   * Adds an item to the end of the queue.
   * 
   * @param item - The item to enqueue.
   */
  enqueue(item: T): void {
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
   * View the item at the front of the queue without removing it.
   * 
   * @returns The front item of the queue, or undefined if the queue is empty.
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
   * Returns the number of items currently in the queue.
   * 
   * @returns The number of items in the queue.
   */
  size(): number {
    return this.queue.length;
  }

  /**
   * Clears the queue of all items.
   */
  clear(): void {
    this.queue = [];
  }
}

export default Queue;