class Matrix{
    constructor(string){
            this.rows = [];
            this.columns = [];
            
            string.split('\n').forEach((elm,index) => {
                this.rows.push(elm.split(' ').map(Number));
            });

            this.rows.forEach((elm,index) => {
                this.columns[index] = this.rows.map((item)  => item[index]);
            });
        }
}

module.exports = Matrix;