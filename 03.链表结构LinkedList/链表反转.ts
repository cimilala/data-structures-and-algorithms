import {LinkedList,LinkNode} from "./实现链表结构LinkedList";
const test = new LinkedList<number>();
test.append(5)
test.append(9)
test.append(12)
test.append(4)
test.append(6)
test.trave()

function reserveLinst<T>(head:LinkNode<T>|null) {
    if(head===null||head.next===null) return head
    let newHead:LinkNode<T>|null = null
    while (head) {
        let current = head.next
        head.next = newHead
        newHead = head
        head = current
      
    }
    return newHead
}
const test2 = new LinkedList<number>()
test2.head = reserveLinst(test.head)
test2.trave()
// 递归
function reserveLinst1<T>(head:LinkNode<T>|null) {
    if(head===null||head.next===null) return head
   const newHead = reserveLinst1(head.next)
    head.next.next = head
    head.next = null
    return newHead
}
reserveLinst1(test.head)

