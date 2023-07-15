class Stack<T> {
    items:Array<T> = [];
    //1.将元素压入栈
    push(value:T):void{
        this.items.push(value)
    }
    //2.从栈中去除元素
    pop():T | undefined{
        return this.items.pop()
    }
    //3.查看栈顶元素
    peek():T | undefined{
        return this.items[this.items.length-1]
    }
    //4.判断栈是否为空
    isEmpty():boolean{
        return this.items.length === 0
    }
    //5.获取栈中元素个数
    size():number{
        return this.items.length
    }
    //6.toString方法
    toString():string{
        let resultString = ""
        for(let i = 0;i<this.items.length;i++){
            resultString += this.items[i]+""
        }
        return resultString
    }
}

export {Stack}

