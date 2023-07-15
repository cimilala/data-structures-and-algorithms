class HashTable<T = any> {
   storage: [string, T][][] = [];
  private length: number = 7;
  private count: number = 0;
  private getIndex(key: string, max: number): number {
    let hashCode = 0;
    const length = key.length;
    for (let index = 0; index < length; index++) {
      hashCode = 31 * hashCode + key.charCodeAt(index);
    }
    const index = hashCode % max;
    return index;
  }
  resize(newLength:number) {
    let newStorage = this.storage
    this.storage = []
    this.length = newLength
    this.count = 0
    newStorage.forEach((item)=>{
        if(!item) return
        for (let i = 0; i < item.length; i++) {
           this.put(item[i][0],item[i][1])
            
        }
    })
  }

  put(key: string, value: T) {
    const index = this.getIndex(key, this.length);
    let bucket = this.storage[index];
    let isUpdate = false;
    if (!bucket) {
        this.storage[index] = []
        bucket = this.storage[index] 
    } else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          isUpdate = true;
        }
      }
    
    }
    if (!isUpdate) {
        bucket.push([key, value]);
        this.count++
        const loadFactor = this.count / this.length
        if(loadFactor > 0.75) {
            this.resize(this.length*2)
        }
      }
  }
  get(key: string) {
    const index = this.getIndex(key, this.length);
    const bucket = this.storage[index];
    if (!bucket) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined
  }
  delete(key:string) {
    const index = this.getIndex(key, this.length);
    const bucket = this.storage[index];
    if (!bucket) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
       bucket.splice(i,1)
       this.count--
       const loadFactor = this.count / this.length
       if(loadFactor<0.25&&this.length>7) {
        this.resize(Math.floor(this.length/2))
       }
       return bucket[i][1]
      }
    }
    return undefined
  }
}
const test = new HashTable<number>();
test.put("aaa", 133);
test.put("bbb", 133);
test.put("ccc", 133);
test.put("ddd", 133);
test.put("eee", 133);
test.put("ggg", 133);


console.log(test.storage);

test.put("hhh", 133);
console.log("111",test.storage);
