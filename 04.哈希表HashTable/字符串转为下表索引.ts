function hasFun(key:string,max:number):number {
    let hashCode = 0
    const length = key.length
    for (let index = 0; index < length; index++) {
       hashCode = 31 * hashCode + key.charCodeAt(index)
        
    }
    const index = hashCode%max
    return index
}
export default hasFun



