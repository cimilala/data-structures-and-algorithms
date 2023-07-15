import { Stack } from "./实现栈结构Stack"
function decimalToBinary(number:number) {
    const stack = new Stack()

    while (number>0) {
        const result = number%2
        stack.push(result)
        number = Math.floor(number/2)
    }
    console.log(stack.items.reverse().join(""));
    
}
decimalToBinary(2)