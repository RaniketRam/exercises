class Triangle{
    constructor(num){
        this.num = num;
        this.rows = this.getTriangle();
        this.lastRow = this.getTriangle()[this.num-1];
    }
getTriangle() {
        var arr = [];
        for(var row = 0; row < this.num; row++) {
            arr[row] = [];
            for(var col = 0; col < row+1; col++) {
                if(col === 0 || col === row) {
                    arr[row][col] = 1;
                } else {
                    arr[row][col] = arr[row-1][col-1] + arr[row-1][col];
                }         
            }       
        }   
        return arr;
    };
}

module.exports = Triangle;