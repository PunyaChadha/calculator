let val = document.getElementById('value');
let answer = document.getElementById('ans');
let buttons = document.querySelectorAll('button');

let result = '';
let clr = 0;

buttons.forEach((b) => {
    b.addEventListener('click',function(e){
        displayValue(e.target.id);
    })
})

const displayValue = function(x){
    if(x=='equal'){
        val.style.color = 'rgb(255, 101, 255)';

        // fetch('eval(result)')
        //     .then((response) => {
        //         val.innerHTML = eval(result);
        //         answer.innerHTML = '';
        //         result = eval(result);
        //         clr = 1;
        //     })
        //     .catch((error) => {
        //         val.innerHTML = 'Invalid Syntax';
        //         answer.innerHTML = '';
        //         result = '';
        //     })

        try {
            val.innerHTML = String(eval(result));
            answer.innerHTML = '';
            result = String(eval(result));
            clr = 1;
        } catch (error) {
            val.innerHTML = 'Invalid Syntax';
            answer.innerHTML = '';
            result = '';
        }
    }
    else if(x=='C'){
        val.innerHTML = '';
        answer.innerHTML = '';
        result = '';
    }
    else if(x=='delete'){
        val.style.color = 'cyan';
        clr = 0;
        if(val.innerHTML == 'Invalid Syntax'){
            val.innerHTML = '';
        }
        else{
            val.innerHTML = val.innerHTML.slice(0, -1);
            result = result.slice(0, -1);
            
            try {
                answer.innerHTML = String(eval(result));
            } catch (error) {
                answer.innerHTML = '';
            }
            if(val.innerHTML == ''){
                answer.innerHTML = '';
            }
            
            // fetch('eval(result)')
            //     .then((response) => {
            //         answer.innerHTML = response;
            //     })
            //     .catch((error) => {
            //         answer.innerHTML = '';
            //     })
            //     .finally(() => {
            //         if(val.innerHTML == ''){
            //             answer.innerHTML = '';
            //         }
            //     })
        }
    }
    else if(x=='('){
        val.style.color = 'cyan';
        clr = 0;
        val.innerHTML += 'x(';
        result += '*(';
        answer.innerHTML = String(eval(result));
    }
    else if(x=='negate'){
        val.style.color = 'cyan';
        clr = 0;
        if(val.innerHTML.slice(-1)>=0 && val.innerHTML.slice(-1)<=9 && val.innerHTML != ''){
            val.innerHTML += 'x(-';
            result += '*(-';
        }
        else{
            val.innerHTML += '(-';
            result += '(-';
        }
        answer.innerHTML = String(eval(result));
    }
    else{
        val.style.color = 'cyan';
        if(x>=0 && x<=9 && clr == 1){
            val.innerHTML = '';
            result = '';
        }
        clr = 0;
        if(val.innerHTML == 'Invalid Syntax'){
            val.innerHTML = '';
        }
        val.innerHTML += x;
        if(x=='x'){
            x = '*';
        }
        result += x;
        answer.innerHTML = String(eval(result));
    }
}

// const blink = function(value){
//     setTimeout( () => {
//         value.innerHTML = '';
//     },300);
//     value.innerHTML = 'Invalid Syntax';
//     setTimeout( () => {
//         value.innerHTML = '';
//     },300);
//     value.innerHTML = 'Invalid Syntax';
//     setTimeout( () => {
//         value.innerHTML = '';
//     },300);
//     value.innerHTML = 'Invalid Syntax';
//     setTimeout( () => {
//         value.innerHTML = '';
//     },300);
// }
