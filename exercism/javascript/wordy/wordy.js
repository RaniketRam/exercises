class WordProblem{
    constructor(question){
        this.getOperator = {
        'plus': '+',
        'minus': '-',
        'multiplied': '*',
        'divided': '/'
        };
        this.question = question;        
    }
    answer(){
        var operandes = [];
        var operators = [];
        operandes = this.question.match(/[-\d]+/g);

        if(operandes === null || operandes.length == 1 || operandes === [] ){
            throw new ArgumentError();
        }else{
            operandes = operandes.map((x) => parseInt(x));
        }

        operators = this.question.match(/(plus|minus|multiplied|divided)/g);
        if(  operators === []){
            throw new ArgumentError();
        }else{
            operators = operators.map((x) => {return x;});
        }

        var init = operandes[0];

        for(var i = 0; i < operandes.length; i++){
            var caseUse = operators[i];
            switch(caseUse){
                case 'plus': init = init + operandes[i+1];
                    break;
                case 'minus': init = init - operandes[i+1];
                    break;
                case 'multiplied': init = init * operandes[i+1];
                    break;
                case 'divided': init = init / operandes[i+1];
                    break;
                default: 
                // throw new ArgumentError();
                    break;
            }
        }      
        return init;
    } 
}

class ArgumentError {}

module.exports = {
    WordProblem: WordProblem,
    ArgumentError: ArgumentError
}
