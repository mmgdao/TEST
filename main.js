let num = document.getElementsByClassName("button");
let result = document.getElementById("result");
let kigou = ["+","-","*","/"];
let decimal = "."
let number = ["1","2","3","4","5","6","7","8","9"]

function clickbutton(num) {
    if (num.innerHTML == "AC") {
        result.innerHTML = 0;
    }else if(num.innerHTML == decimal) {
        if((result.innerHTML.includes(decimal)) || (kigou.includes(result.innerHTML.slice(-1)))) {
            return;
        }else {
            result.innerHTML += num.innerHTML;
        }

    }else if(kigou.includes(num.innerHTML)) {
        if((result.innerHTML == 0) || (kigou.includes(result.innerHTML.slice(-1)) || (result.innerHTML.slice(-1).includes(decimal)) )) {
            return;
        }else  {
            result.innerHTML += num.innerHTML;
        }     
    }else if((num.innerHTML == "00") || (num.innerHTML == "0")) {
        if((result.innerHTML == "0") || (kigou.includes(result.innerHTML.slice(-1))) ){
            return;
        }else {
            result.innerHTML += num.innerHTML;
        }

    }else if((result.innerHTML == 0) && (result.innerHTML.length == 1)) {
        result.innerHTML = num.innerHTML;
    }else {
        result.innerHTML += num.innerHTML;
    }
   
    
}

function equalbutton() {
    result.innerHTML = eval(result.innerHTML);
}
