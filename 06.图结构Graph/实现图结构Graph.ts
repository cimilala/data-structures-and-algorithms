class Graph<T>{
    //存放顶点
    verteces:T[] = []
    //边
    adjList:Map<T,T[]> = new Map()
    //添加边
    addVerteces(vertex:T) {
        this.verteces.push(vertex)
        this.adjList.set(vertex,[])
    }
    addEdge(v1:T,v2:T) {
        this.adjList.get(v1)?.push(v2)
        this.adjList.get(v2)?.push(v1)
    }
    bfs() {
        let queue:T[] = []
        let visited:Set<T> = new Set()
      if(this.verteces.length) {
        queue.push(this.verteces[0])
      }
      while (queue.length) {
       let m= queue.shift()!
       console.log(m);
       
       visited.add(m)
      let n = this.adjList.get(m)
      if(!n) continue
      for (const value of n) {
        if(!visited.has(value)) {
            visited.add(value)
            queue.push(value)
        }
       
      }
      }
        
    }
    dfs() {
        let stack:T[] = []
        let visited:Set<T> = new Set()
      if(this.verteces.length) {
        stack.push(this.verteces[0])
      }
      while (stack.length) {
       let m= stack.pop()!
       console.log(m);
       visited.add(m)
      let n = this.adjList.get(m)
      if(!n) continue
      for (let i = n.length-1;i>=0;i--) {
        if(!visited.has(n[i])) {
            visited.add(n[i])
            stack.push(n[i])
        }
       
      }
      }
    }
}

const graph = new Graph<number>()
graph.verteces.push(1)
graph.verteces.push(2)
graph.verteces.push(3)
graph.verteces.push(4)
graph.verteces.push(5)
graph.verteces.push(6)
graph.verteces.push(7)
graph.verteces.push(8)
graph.verteces.push(9)
graph.adjList.set(1,[2,7])
graph.adjList.set(2,[1,3,5])
graph.adjList.set(3,[2,6])
graph.adjList.set(4,[5])
graph.adjList.set(5,[2,4,8])
graph.adjList.set(6,[3,9])
graph.adjList.set(7,[1,8])
graph.adjList.set(8,[5,7,9])
graph.adjList.set(9,[6,8])

graph.dfs()