  class LinkedList{
    constructor(){
            this.node = [];
            this.push = num => { return this.node.push(num)}; 
            this.pop = () => { return this.node.pop()};
            this.unshift = num => { return this.node.unshift(num)};
            this.shift = () => { return this.node.shift()};
            this.count = () => { return this.node.length};
            this.delete = num => { 
                const index = this.node.indexOf(num);
                return index > -1 ? this.node.splice(index, 1) : null;
             };
    }
}

module.exports = LinkedList;