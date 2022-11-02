let total =0;
let buffer ='0';
let operation;
let srceen = document.querySelector("#screen");

// function btnclick(v){
//     console.log(v)
// }
function buttonclick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    srceen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case "C":
            buffer= "0";
            total=0;
            break;
        case '=':
            if (operation===null){
                return
            }
            flushOperation(parseInt(buffer));
            operation=null;
            buffer=total;
            total=0;
            break;
        case "DEL":
            if (buffer.length===1){
                buffer="0";
            }else{
                buffer =buffer.substring(0, buffer.length - 1)
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(symbol==="0"){
        return;
    }

    let intbuffer= parseInt(buffer);

    if(total==="0"){
        total = intbuffer;
    }else{
        flushOperation(intbuffer);
    }
    operation = symbol;
    buffer="0";
}

function flushOperation(intbuffer){
    if (operation ==="+"){
        total +=intbuffer;
    }else if(operation ==="-"){
        total -=intbuffer;
    }else if(operation === "*"){
        total *=intbuffer;
    }else if(operation ==="*"){
        total /=intbuffer;
    }
}

function handleNumber(numberString){
    if(buffer==="0"){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector(".numbers").addEventListener('click', function(event){
        buttonclick(event.target.innerText);
    })
}

init();