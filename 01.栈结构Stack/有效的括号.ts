import { Stack } from "./实现栈结构Stack";
function isValid(params:string):boolean {
    const stack = new Stack()
    for (let i = 0; i < params.length; i++) {
        const c = params[i]
       switch (c) {
        case "(":
            stack.push(")")
            break;
       case "{":
        stack.push("}")
        break;
        case "[":
            stack.push("]")
            break;
        default:
            if(c !== stack.pop()) return false
       }
        
    }
    return stack.isEmpty()
}
console.log(isValid("([))"));

