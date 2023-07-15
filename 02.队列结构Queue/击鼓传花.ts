import { ArrayQueue } from "./实现队列结构Queue";

function foo(params:number,persons:string[]) {
   
    const arrayQueue  =new ArrayQueue<string>()
   
    arrayQueue.data = persons
        while (arrayQueue.size() > 1) {
            for (let i = 0; i < params; i++) {
                if(i === params-1) {
                    arrayQueue.dequeue()
                } else {
                    arrayQueue.enqueue(arrayQueue.dequeue()!)
                }
                
            }
            console.log(arrayQueue.data[0]);
        }
      
        
}
foo(4,["1","2","3","4",])