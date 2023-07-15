function lastRemaining(n: number, m: number): number {
    let items:number[]= []
    let newItems:number[] =[]
    for(let i = 0;i<n;i++) {
        items.push(i)
         newItems.push(i)
    }
    while(newItems.length!==1) {
  for(let i = 0;i<m;i++) {
        if(i===m-1) {
            newItems.shift()
        }else {
            newItems.push(newItems.shift()!)
        }
    }
    }
  return Number(newItems.join(""))
 };
 console.log( lastRemaining(5,3));
 
