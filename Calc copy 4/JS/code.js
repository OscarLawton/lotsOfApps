
let tooBig = false;
let clickedAlready = false;
let all_clear = true;
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
       
        clear.innerHTML = "<h3>AC</h3>";
        if (all_clear === false){

            checkNumSize(num.toString(),outContent);
            outContent.innerHTML = "" + num + "";
            all_clear = true;

        }
        else{

            num1 = 0;
            num2 = 0;
            checkNumSize(num.toString(),outContent);
            outContent.innerHTML = "" + num + "";
            clickedAlready = false;
            all_clear = true

        }
    }

    one.onclick = function(){
       
        
        if (num === "0"){

            num = "1";

        }
        else if (tooBig === false && num != "O"){ 

            num += "1";
            checkNumSize(num.toString(),outContent);
            outContent.innerHTML = "" + num + "";

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    two.onclick = function(){
    
        
        if (num === "0"){

            num = "2";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }
        else if (tooBig === false && num != "O"){

            num += "2";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    three.onclick = function(){
   
        if (num === "0"){

            num = "3";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }
        else if(tooBig === false && num != "O"){

            num += "3";  
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    four.onclick = function(){
   
        
        if (num === "0"){

            num = "4";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }
        else if(tooBig === false && num != "O"){

            num += "4";  
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    five.onclick = function(){
    
    
        if (num === "0"){

            num = "5";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }
        else if(tooBig === false && num != "O"){

            num += "5";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + ""; 

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    six.onclick = function(){
        
       
        if (num === "0"){

            num = "6";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }
        else if(tooBig === false && num != "O"){

            num += "6";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    seven.onclick = function(){
        
        
        if (num === "0"){

            num = "7";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }
        else if(tooBig === false && num != "O"){

            num += "7";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    eight.onclick = function(){
        
        
        if (num === "0"){

            num = "8";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }
        else if(tooBig === false && num != "O"){

            num += "8";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    nine.onclick = function(){
        
        if (num === "0"){

            num = "9";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }
        else if(tooBig === false && num != "O"){

            num += "9";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    zero.onclick = function(){
        
        
        if (num === "0"){

            num = "0";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }
        else if(tooBig === false && num != "O"){

            num += "0";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";

        }

        all_clear = false;
        clear.innerHTML = "<h3>C</h3>";
    }

    decimal.onclick = function(){
        if (dot_already === false && tooBig === false){

            num += ".";
            checkNumSize(num,outContent);
            outContent.innerHTML = "" + num + "";
            dot_already = true;

        }

        all_clear = false;
    }

    plus.onclick = function(){
        
        if (clickedAlready === false){

            num1 = Number(num);
            checkNumSize(num1.toString(),outContent);
            outContent.innerHTML = "" + num1 + "";
            num = "0";
            add = true;
            sub = false;
            multiplication = false;
            division = false;
            clickedAlready = true;
            tooBig = false;
          
        }
        else{

            checkNumSize(num,outContent);
            num2 = Number(num);
            if(add === true){

                num1 =  addition(num1, num2);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (sub === true){

                num1 = subtract(num1, num2) ;
                outContent.innerHTML = "" + num1.toString() + "";
                
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
            tooBig = false;
            multiplication = false;
            division = false;
            clickedAlready = true;
            all_clear = true;
        }
        
    }    

    minus.onclick = function(){

        if (clickedAlready === false){

            num1 = Number(num);
            checkNumSize(num1.toString(),outContent);
            outContent.innerHTML = "" + num1.toString() + "";
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
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
                
             
            }
            else if (sub === true){

                num1 = subtract(num1, num2) ;
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
                
                
            }
            else if (multiplication === true){

                num1 = multiply(num1,num2);
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (division === true){

                num1 = divideFunc(num1,num2);
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
               
            }

            num = "0";
            add = false;
            sub = true;
            tooBig = false;
            multiplication = false;
            division = false;
          
        }
    }  

    multi.onclick = function(){
        if (clickedAlready === false){

            num1 = Number(num);
            checkNumSize(num1.toString(),outContent);
            outContent.innerHTML = "" + num1.toString() + "";
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
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (sub === true){
             
                num1 = subtract(num1, num2) ;
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (multiplication === true){
              
                num1 = multiply(num1,num2);
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (division === true){
              
                num1 = divideFunc(num1,num2);
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
               
            }

            num = "0";
            add = false;
            sub = false;
            tooBig = false;
            multiplication = true;
            division = false;
        }
    }     

    divide.onclick = function(){

        if (clickedAlready === false){

            num1 = Number(num);
            checkNumSize(num1,outContent);
            outContent.innerHTML = "" + num1.toString() + "";
            tooBig = false;
            num = "0";
            add = false;
            sub = false;
            multiplication = false;
            division = true;
            clickedAlready = true;

        }
        else{
            
            num2 = Number(num);
            
            if(add === true){

                num1 =  addition(num1, num2);
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (sub === true){

                num1 = subtract(num1, num2) ;
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (multiplication === true){

                num1 = multiply(num1,num2);
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
                
            }
            else if (division === true){

                num1 = divideFunc(num1,num2);
                checkNumSize(num1.toString(),outContent);
                outContent.innerHTML = "" + num1.toString() + "";
               
            }

            num = "0";
            add = false;
            sub = false;
            tooBig = false;
           
            multiplication = false;
            division = true;
        }
    }     
    equal.onclick = function(){

        num2 = Number(num);
        if(add === true){

            num1 =  addition(num1, num2);
            checkNumSize(num1.toString(),outContent);
            outContent.innerHTML = "" + num1.toString() + "";
            add = false;

        }
        else if (sub === true){

            num1 = subtract(num1, num2) ;
            checkNumSize(num1.toString(),outContent);
            outContent.innerHTML = "" + num1.toString() + "";
            sub = false;

        }
        else if (multiplication === true){

            num1 = multiply(num1,num2);
            checkNumSize(num1.toString(),outContent);
            outContent.innerHTML = "" + num1.toString() + "";
            multiplication = false;

        }
        else if (division === true){

            num1 = divideFunc(num1,num2);
            checkNumSize(num1.toString(),outContent);
            outContent.innerHTML = "" + num1.toString() + "";
            division = false;

        }
        tooBig = false;
       
    }
    dispo.onclick = function(){
        
        num = inverDispo(Number(num)).toString();
        checkNumSize(num.toString(),outContent);
        outContent.innerHTML = "" + num.toString() + "";

    }
    percent.onclick = function(){
       
        num = convertToPercent(Number(num)).toString();
        checkNumSize(num.toString(),outContent);
        outContent.innerHTML = "" + num.toString() + "";

    }
}


function checkNumSize(num,div){
    
    let numLen = num.length;
    if(numLen >= 0 && numLen < 8){
       
        div.style.fontSize = "70px";

    }
    else if(numLen >= 8 && numLen < 11){
       
        div.style.fontSize = "50px";

    }
    else if(numLen>= 11 && numLen <14){
    
        div.style.fontSize = "40px";

    }
    else if (numLen >= 14 && numLen < 18){
    
        div.style.fontSize = "30px";

    }
    else if (numLen >= 18 && numLen < 21){
     
        div.style.fontSize = "25px";

    }
    else if(numLen >= 21 && numLen < 24){

        div.style.fontSize = "22px";

    }
    else if(numLen >= 24 && numLen < 26){
     
        div.style.fontSize = "20px";

    }
    else if(numLen >= 26 && numLen < 29){
 
        div.style.fontSize = "18px";

    }
    else if(numLen >= 29 && numLen < 33){
    
        div.style.fontSize = "16px";

    }
    else if(numLen >= 33 && numLen < 37){

        div.style.fontSize = "14px";

    }
    else if(numLen >= 37 && numLen < 43){

        div.style.fontSize = "12px";

    }
    else if(numLen >= 43 && numLen < 51){
      
        div.style.fontSize = "10px";

    }
    else if(numLen >= 51) {

        div.style.fontSize = "10px";
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

//converts positive number to negative and vice versa
function inverDispo(number){
    return number * (-1);
}

//converts number into a percent with decimal place
function convertToPercent(number){
    return number / 100;
}
