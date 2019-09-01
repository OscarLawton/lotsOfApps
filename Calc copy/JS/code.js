let tooBig = false;
let clickedAlready = false;
function main(){
    
    const output = document.querySelector("#output");
    const outContent = document.querySelector("#output-content");
    const clear = document.querySelector("#clear");
    const dispo = document.querySelector("#disposition");
    const percent = document.querySelector("#percent");
    const divide = document.querySelector("#divide");

    const seven = document.querySelector("#seven");
    const eight = document.querySelector("#eight");
    const nine = document.querySelector("#nine");
    const multi = document.querySelector("#multiply");

    const four = document.querySelector("#four"); 
    const five = document.querySelector("#five");
    const six = document.querySelector("#six");
    const minus = document.querySelector("#minus");

    const one = document.querySelector("#one");
    const two = document.querySelector("#two");
    const three = document.querySelector("#three");
    const plus = document.querySelector("#addition");
    
    const zero = document.querySelector("#zero");
    const decimal = document.querySelector("#decimal_place");
    const equal = document.querySelector("#equal");
    const space =document.querySelector("#space");
    let num = "0";
    let dot_already = false;
    let add = false;
    let sub = false;
    let multiplication = false;
    let division = false;
    let num1 = 0;
    let num2 = 0;
    outContent.innerHTML = "" + num + "";
   
    
    
    clear.onclick = function(){  
        num = "0";
        outContent.style.fontSize = "70px"; 
        outContent.innerHTML = "" + num + "";
        dot_already = false; 
        tooBig = false;
        clickedAlready = false;
    }

    one.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        if (num === "0"){
            num = "1";
        }
        else if (tooBig === false && num != "O"){ 
            num += "1";
            outContent.innerHTML = "" + num + "";
        }
    }

    two.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        if (num === "0"){
            num = "2";
            outContent.innerHTML = "" + num + "";
        }
        else if (tooBig === false && num != "O"){
            num += "2";
            outContent.innerHTML = "" + num + "";
        }
    }

    three.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        console.log("Fuck " + num.length);
        if (num === "0"){
            num = "3";
            outContent.innerHTML = "" + num + "";
        }
        else if(tooBig === false && num != "O"){
            num += "3";  
            outContent.innerHTML = "" + num + "";
        }
    }

    four.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        if (num === "0"){
            num = "4";
            outContent.innerHTML = "" + num + "";
        }
        else if(tooBig === false && num != "O"){
            num += "4";  
            outContent.innerHTML = "" + num + "";
        }
    }

    five.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        if (num === "0"){
            num = "5";
            outContent.innerHTML = "" + num + "";
        }
        else if(tooBig === false && num != "O"){
            num += "5"; 
            outContent.innerHTML = "" + num + ""; 
        }
    }

    six.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        if (num === "0"){
            num = "6";
            outContent.innerHTML = "" + num + "";
        }
        else if(tooBig === false && num != "O"){
            num += "6";  
            outContent.innerHTML = "" + num + "";
        }
    }

    seven.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        if (num === "0"){
            num = "7";
            outContent.innerHTML = "" + num + "";
        }
        else if(tooBig === false && num != "O"){
            num += "7";
            outContent.innerHTML = "" + num + "";
        }
    }

    eight.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        if (num === "0"){
            num = "8";
            outContent.innerHTML = "" + num + "";
        }
        else if(tooBig === false && num != "O"){
            num += "8";
            outContent.innerHTML = "" + num + "";
        }
    }

    nine.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        if (num === "0"){
            num = "9";
            outContent.innerHTML = "" + num + "";
        }
        else if(tooBig === false && num != "O"){
            num += "9";
            outContent.innerHTML = "" + num + "";
        }
    }

    zero.onclick = function(){
        console.log(tooBig)
        checkNumSize(num,outContent);
        if (num === "0"){
            num = "0";
            outContent.innerHTML = "" + num + "";
        }
        else if(tooBig === false && num != "O"){
            num += "0";
            outContent.innerHTML = "" + num + "";
        }
    }

    decimal.onclick = function(){
        if (dot_already === false && tooBig === false){
            num += ".";
            outContent.innerHTML = "" + num + "";
            dot_already = true;
        }
    }

    plus.onclick = function(){
        if (clickedAlready === false){
            num1 = Number(num);
            outContent.innerHTML = "" + num + "";
            num = "0";
            add = true;
            sub = false;
            multiplication = false;
            division = false;
            clickedAlready = true;
        }
        else{
            num2 = Number(num);
            if(add === true){
                num1 =  addition(num1, num2);
                outContent.innerHTML = "" + num.toString() + "";
                
             
            }
            else if (sub === true){
                num1 = subtract(num1, num2) ;
                outContent.innerHTML = "" + num.toString() + "";
                
                
            }
            else if (multiplication === true){
                num1 = multiply(num1,num2);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (division === true){
                num1 = divideFunc(num1,num2);
                outContent.innerHTML = "" + num1.toString() + "";
               
               
            }
            num = "0";
            add = true;
            sub = false;
            multiplication = false;
            division = false;
            clickedAlready = true;
        }
        
    }    

    minus.onclick = function(){
        if (clickedAlready === false){
            num1 = Number(num);
            outContent.innerHTML = "" + num + "";
            num = "0";
            add = false;
            sub = true;
            multiplication = false;
            division = false;
            clickedAlready = true;
        }
        else{
            num2 = Number(num);
            if(add === true){
                num1 =  addition(num1, num2);
                outContent.innerHTML = "" + num.toString() + "";
                
             
            }
            else if (sub === true){
                num1 = subtract(num1, num2) ;
                outContent.innerHTML = "" + num.toString() + "";
                
                
            }
            else if (multiplication === true){
                num1 = multiply(num1,num2);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (division === true){
                num1 = divideFunc(num1,num2);
                outContent.innerHTML = "" + num1.toString() + "";
               
               
            }
            num = "0";
            add = false;
            sub = true;
            multiplication = false;
            division = false;
          
        }
    }  

    multi.onclick = function(){
        if (clickedAlready === false){
            num1 = Number(num);
            outContent.innerHTML = "" + num + "";
            num = "0";
            add = false;
            sub = false;
            multiplication = true;
            division = false;
            clickedAlready = true;
        }
        else{
            num2 = Number(num);
            if(add === true){
                num1 =  addition(num1, num2);
                outContent.innerHTML = "" + num.toString() + "";
                
             
            }
            else if (sub === true){
                num1 = subtract(num1, num2) ;
                outContent.innerHTML = "" + num.toString() + "";
                
                
            }
            else if (multiplication === true){
                num1 = multiply(num1,num2);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (division === true){
                num1 = divideFunc(num1,num2);
                outContent.innerHTML = "" + num1.toString() + "";
               
               
            }
            num = "0";
            add = false;
            sub = false;
            multiplication = true;
            division = false;
        }
    }     

    divide.onclick = function(){
        if (clickedAlready === false){
            num1 = Number(num);
            outContent.innerHTML = "" + num + "";
            num = "0";
            add = false;
            sub = false;
            multiplication = false;
            division = true;
            clickedAlready = true;
        }
        else{
            console.log("the divide second click function worked")
            console.log("the num in second divide click is " + num)
            num2 = Number(num);
            if(add === true){
                num1 =  addition(num1, num2);
                outContent.innerHTML = "" + num.toString() + "";
                
             
            }
            else if (sub === true){
                num1 = subtract(num1, num2) ;
                outContent.innerHTML = "" + num.toString() + "";
                
                
            }
            else if (multiplication === true){
                num1 = multiply(num1,num2);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (division === true){
                num1 = divideFunc(num1,num2);
                outContent.innerHTML = "" + num1.toString() + "";
               
               
            }
            num = "0";
            add = false;
            sub = false;
            multiplication = false;
            division = true;
        }
    }     
    equal.onclick = function(){
        num2 = Number(num);
        
        if(add === true){
            num1 =  addition(num1, num2);
            outContent.innerHTML = "" + num.toString() + "";
            
            add = false;
        }
        else if (sub === true){
            num1 = subtract(num1, num2) ;
            outContent.innerHTML = "" + num.toString() + "";
            
            sub = false;
        }
        else if (multiplication === true){
            num1 = multiply(num1,num2);
            outContent.innerHTML = "" + num1.toString() + "";
            multiplication = false;
        }
        else if (division === true){
            num1 = divideFunc(num1,num2);
            outContent.innerHTML = "" + num1.toString() + "";
           
            division = false;
        }
       
    }
}


function checkNumSize(num,div){
    
    let numLen = num.length;
    if(numLen > 6 && numLen < 10){
        console.log(numLen + "greater than seven");
        div.style.fontSize = "50px"; 
    }
    else if(numLen>= 10 && numLen <17){
        console.log(numLen + "greater than 10 less than 17")
        div.style.fontSize = "30px"; 
    }
    else if (numLen >= 17 && numLen < 26){
        console.log(numLen + "greater than 17 less than 26")
        div.style.fontSize = "20px"; 
    }
    else if (numLen >= 26 && numLen <34 ){
        console.log(numLen + "greater than 26 less than 35")
        div.style.fontSize = "15px"; 
    }
    else if(numLen >= 34) {
        console.log(numLen + "greater than 35")
        tooBig = true;
    }
}

function addition(a,b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
} 

function divideFunc(a, b){
    return a / b;
}

class Num{
    constructor() {
      console.log("created a number");
    }
  }