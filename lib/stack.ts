/**
 * A generic fixed-size Stack implementation.
 * 
 * @template T - The type of elements held in the stack.
 */
class Stack<T> {
  public stack: T[] = [];
  private maxSize: number;

  /**
   * Creates a new fixed-size stack.
   * 
   * @param maxSize - The maximum number of elements the stack can hold.
   * @throws Error if maxSize is less than or equal to 0.
   */
  constructor(maxSize: number) {
    if (maxSize <= 0) {
      throw new Error("Stack size must be greater than 0");
    }
    this.maxSize = maxSize;
  }

  /**
   * Pushes an item onto the stack.
   * 
   * @param item - The item to push onto the stack.
   * @throws Error if the stack is full.
   */
  push(item: T): void {
    if (this.isFull()) {
      throw new Error("Stack overflow: cannot push onto a full stack");
    }
    this.stack.push(item);
  }

  /**
   * Pops the last item off the stack and returns it.
   * 
   * @returns The last item added to the stack, or undefined if the stack is empty.
   */
  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Cannot pop from a empty stack");
    }
    return this.stack.pop();
  }

  /**
   * Peeks at the top item on the stack without removing it.
   * 
   * @returns The top item on the stack, or undefined if the stack is empty.
   */
  peek(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Cannot peek from a empty stack");
    }
    return this.stack[this.stack.length - 1];
  }

  /**
   * Checks if the stack is empty.
   * 
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  /**
   * Checks if the stack is full.
   * 
   * @returns True if the stack is full, false otherwise.
   */
  isFull(): boolean {
    return this.stack.length >= this.maxSize;
  }

  /**
   * Returns the number of items currently in the stack.
   * 
   * @returns The number of items in the stack.
   */
  size(): number {
    return this.stack.length;
  }

  /**
   * Returns a copy of the current stack.
   * 
   * @returns A copy of the stack as an array.
   */
  view(): T[] {
    return [...this.stack]; // Return a shallow copy of the stack array
  }

  /**
   * Returns the maximum size of the stack.
   * 
   * @returns The maximum capacity of the stack.
   */
  getMaxSize(): number {
    return this.maxSize;
  }

  /**
   * Clears the stack of all items.
   */
  clear(): void {
    this.stack = [];
  }
}

export default Stack;