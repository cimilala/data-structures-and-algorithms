class ArrayQueue<T> {
   private _data:Array<T> = [];
    //1.将元素压入队列
    enqueue(value:T):void{
        this._data.push(value)
    }
    //2.从队列中去除元素
    dequeue():T | undefined{
        return this._data.shift()
    }
    //3.查看队列第一个元素
    peek():T | undefined{
        return this._data[0]
    }
    //4.判断队列是否为空
    isEmpty():boolean{
        return this._data.length === 0
    }
    //5.获取队列中元素个数
    size():number{
        return this._data.length
    }
    //6.toString方法
    toString():string{
        let resultString = ""
        for(let i = 0;i<this.data.length;i++){
            resultString += this.data[i]+""
        }
        return resultString
    }
    get data() {
        return this._data
    }
    set data(value:T[]) {
        this._data = value
    }
}

export {ArrayQueue}

