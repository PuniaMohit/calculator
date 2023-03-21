
var of = document.getElementById('js-off').addEventListener('click',off);
var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('.button');
var flag = 0;

function off(){
    console.log('hello')
    document.querySelector('.screen').value = '';
    flag = 0;
}

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        var value = button.textContent;
        console.log(value)
       
        if(value === 'On' || value === 'Off'){
            return;
        }
        else if(value === '='){
            flag = 1;
            var postfix = convertToPostfix(document.querySelector('.screen').value);
            console.log(postfix)
            var answer = postfix_evaluation(postfix);
            document.querySelector('.screen').value = '';
            console.log(answer)
            document.querySelector('.screen').value = answer;
            setInterval(function(){
                flag = 0;
            }, 100);
        }
        if(flag == 0){
            document.querySelector('.screen').value += value;    
        }
    })
});



var priority = function(operator) {
    switch(operator)
    {
        case '+':
        case '-':
            return(1);
        case '*':
        case '/':
            return(2);
        default:
            return(-1);
    }
}

var calculateValue = function(num1, operator, num2) {
    switch(operator)
    {
        case '+':
            return(num1+num2);
        case '-':
            return(num1-num2);
        case '*':
            return(num1*num2);
        case '/':
            return(num1/num2);
    }
}

var convertToPostfix = function(infix){
    var operators = [];
    var postfix = '';
    for(var i = 0; i < infix.length; i++) {
        if((infix[i] >= '0' && infix[i] <= '9') || infix[i] == '.' ){
            postfix += infix[i];
            console.log(postfix)
        }
        else {
           
            postfix += ' ';
            if(operators.length === 0) {
                console.log('pahla else wala')
                operators.push(infix[i]);
                console.log(operators)
            } 
            else {
                if(priority(infix[i]) > priority(operators[operators.length - 1])) {
                    console.log('else dusra wala')
                    operators.push(infix[i]);
                    console.log(operators)
                }
                else {
                    while(!(operators.length === 0) && priority(infix[i]) <= priority(operators[operators.length - 1])) {
                        console.log('if else wala ...phla while')
                        var ch = operators[operators.length - 1];
                        operators.pop();
                        postfix += ch;
                    }
                    operators.push(infix[i]);
                    console.log(operators)
                }
            }
        }
    }
    console.log(operators)
    postfix += ' ';
    while(!(operators.length === 0)) {
        console.log('dusre wala while')
        var ch = operators[operators.length - 1];
        postfix += ch;
        operators.pop();
    }
    return(postfix);
}

var postfix_evaluation = function(postfix) {
    var answer = [], n, result;
    for(var i = 0; i < postfix.length; i++) {
        if((postfix[i] >= '0' && postfix[i] <= '9') || postfix[i] == '.') {
            var number = '';
            while(postfix[i] != ' ') {
                number += postfix[i];
                i++;
                console.log(number)
            }
            n = parseFloat(number);   
            answer.push(n);     
            console.log(answer) 
        }
        else {
            console.log("else me gya")
            if(answer.length < 2) {
                console.log("helloanswers")
                result = 'INVALID';
                return(result);
            } else {
                console.log("dusre else me gya")
                var num2 = answer[answer.length - 1];
                console.log(num2)
                answer.pop();
                var num1 = answer[answer.length - 1];
                console.log(num1)
                answer.pop();
                console.log(postfix[i])
                result = calculateValue(num1, postfix[i], num2);
                answer.push(result);
                console.log(answer)
            }
        }
    }
    var finalAns = answer[answer.length - 1];
    console.log(finalAns)
    answer.pop();
    if(answer.length === 0) {
        return(finalAns);
    } else {
        return('INVALID');
    }
}