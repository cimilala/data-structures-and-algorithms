class LinkNode<T> {
  value: T | null = null;
  next: LinkNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
/**
 * 
 * @param head 
 * @returns 
 */class LinkedList<T> {
  head: LinkNode<T> | null = null;
  tail: LinkNode<T> | null = null;
  size: number = 0;
  append(value: T) {
    let newNode = new LinkNode<T>(value);
    let tailNode = this.getNodeByPosition(this.size - 1);
    if (!tailNode) {
      this.head = newNode;
      this.tail  = newNode
    } else {
      tailNode.next = newNode;
      this.tail = newNode
    }
    this.size++;
  }
  trave() {
    const values: T[] = [];
    let current: LinkNode<T> | null = this.head;
    while (current) {
      values.push(current.value!);
      current = current.next;
    }
    console.log(values.join("->"));
  }
  insert(value: T, position: number) {
    let newNode = new LinkNode<T>(value);
    if (!this.tail=== null||!this.tail) {
      this.head = newNode;
      this.tail = newNode
      this.size++
    } else {
      if (position < 0 || position > this.size) {
        return false;
      } else if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
      } else if (position === this.size) {
       this.tail.next = newNode
       this.tail = newNode
       this.size++
      } else {
      
        let preNode = this.getNodeByPosition(position - 1);
        newNode.next = preNode!.next;
        preNode!.next = newNode;
        this.size++;
      }
    }
  }
  removeByValue(value: T) {
    let index = this.indexOf(value);
    if (index !== -1 && index === 0) {
      this.head = this.head!.next;
    } else {
      this.removeByPosition(index);
    }
  }
  removeByPosition(position: number) {
    if (!this.head||!this.tail) return;
    if (position < 0 || position >= this.size) return;
    if (position === 0) {
      this.head = this.head.next;
    }else {
      let preNode = this.getNodeByPosition(position - 1);
      preNode!.next = preNode!.next!.next;
      if(position===this.size-1) {
        this.tail =  preNode
      }
    }

    this.size--;
  }
  getNodeByPosition(position: number): LinkNode<T> | null {
    let index = 0;
    let current = this.head;
    if (position < 0 || position >= this.size) return null;

    while (index++ < position && current) {
      current = current.next;
    }

    return current;
  }
  getNodeByValue(value: T): LinkNode<T> | null {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    return current;
  }
  indexOf(value: T): number {
    let current = this.head;
    let index: number = 0;
    while (current && current.value !== value) {
      current = current.next;
      index++;
    }

    if (index === this.size) {
      return -1;
    } else return index;
  }
  addAtHead(value: T): void {
   this.insert(value,0)
  }
}

const test = new LinkedList()
test.append(9)
test.append(10)
test.append(11)
test.append(12)
test.append(13)
console.log(test.tail);

// test.trave();
// test.getNodeByPosition(2)
// console.log(test.size);

// test.removeByPosition(12)
// test.trave();
export {LinkedList,LinkNode} 
