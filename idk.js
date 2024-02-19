var dupli = 0;
        
let play = document.getElementById("sound");
            function playSeffects(){
                let audio = new Audio("Cot.mp3");
                audio.play()
            }

let play2 = document.getElementById("sound");
            function playSeffects2(){
                let audio2 = new Audio("Wrong.mp3");
                audio2.play()
            }

function changecolor() {
    const inputValue = document.getElementById("inputText").value;

    if(dupli < 9){
        if(inputValue === "SIGNATURE"){
            let elements = document.querySelectorAll('.q1');
            elements.forEach(element => {element.style.color = 'black';});
            dupli = 9;
            playSeffects();
        }
        else if (inputValue === "S") {
            let myTextElement = document.getElementById("S");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else if (inputValue === "I") {
            let myTextElement = document.getElementById("I");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }
        else if (inputValue === "G") {
            let myTextElement = document.getElementById("G");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else if (inputValue === "N") {
            let myTextElement = document.getElementById("N");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else if (inputValue === "A") {
            let myTextElement = document.getElementById("A");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else if (inputValue === "T") {
            let myTextElement = document.getElementById("T");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else if (inputValue === "U") {
            let myTextElement = document.getElementById("U");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else if (inputValue === "R") {
            let myTextElement = document.getElementById("R");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }  
        else if (inputValue === "E") {
            let myTextElement = document.getElementById("E");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else {
            // alert("WRONG GUESS!!");
            playSeffects2();
        }
    }else if (dupli >= 9 && dupli < 17){
        if(inputValue === "AUDACITY"){
            let elements = document.querySelectorAll('.q2');
            elements.forEach(element => {element.style.color = 'black';});
            dupli = 17;
            playSeffects();
        }
        else if (inputValue === "A") {
            let myTextElement = document.getElementById("A2");
            let myTextElement1 = document.getElementById("A21");
            myTextElement1.style.color = 'black'; 
            myTextElement.style.color = 'black';
            dupli+=2;
            playSeffects();
        }
        
        else if (inputValue === "U") {
            let myTextElement5 = document.getElementById("U2");
            myTextElement5.style.color = 'black'; 
            dupli += 1;
            playSeffects();
        }
        else if (inputValue === "D") {
            let myTextElement = document.getElementById("D2");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }
        else if (inputValue === "C") {
            let myTextElement = document.getElementById("C2");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else if (inputValue === "I") {
            let myTextElement = document.getElementById("I2");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else if (inputValue === "T") {
            let myTextElement = document.getElementById("T2");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }   
        else if (inputValue === "Y") {
            let myTextElement = document.getElementById("Y2");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }  
         else {
            // alert("Wrong Guess!");
            playSeffects2();
        }
    }else if (dupli >= 17 && dupli < 22){
        if(inputValue === "LINUX"){
            let elements = document.querySelectorAll('.q3');
            elements.forEach(element => {element.style.color = 'black';});
            dupli = 22;
            playSeffects();
        }
        else if (inputValue === "L") {
            let myTextElement = document.getElementById("L3");
            myTextElement.style.color = 'black';
            dupli++;
            playSeffects();
        }
        
        else if (inputValue === "U") {
            let myTextElement5 = document.getElementById("U3");
            myTextElement5.style.color = 'black'; 
            dupli += 1;
            playSeffects();
        }
        else if (inputValue === "N") {
            let myTextElement = document.getElementById("N3");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }
        else if (inputValue === "I") {
            let myTextElement = document.getElementById("I3");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }  
        else if (inputValue === "X") {
            let myTextElement = document.getElementById("X3");
            myTextElement.style.color = 'black';
            dupli += 1;
            playSeffects();
        }  
         else {
            // alert("Wrong Guess!");
            playSeffects2();
        }
    }else if (dupli >= 22){
        if(inputValue === "PRODUCER"){
            let elements = document.querySelectorAll('.q4');
            elements.forEach(element => {element.style.color = 'black';});
            playSeffects();
        }
        else if (inputValue === "P") {
            let myTextElement = document.getElementById("P4");
            myTextElement.style.color = 'black';
            playSeffects();
        }
        
        else if (inputValue === "R") {
            let myTextElement5 = document.getElementById("R4");
            let myTextElement1 = document.getElementById("R41");
            myTextElement1.style.color = 'black'; 
            myTextElement5.style.color = 'black'; 
            playSeffects();
        }
        else if (inputValue === "O") {
            let myTextElement = document.getElementById("O4");
            myTextElement.style.color = 'black';
            playSeffects();
        }
        else if (inputValue === "D") {
            let myTextElement = document.getElementById("D4");
            myTextElement.style.color = 'black';
            playSeffects();
        }  
        else if (inputValue === "U") {
            let myTextElement = document.getElementById("U4");
            myTextElement.style.color = 'black';
            playSeffects();
        }else if (inputValue === "C") {
            let myTextElement = document.getElementById("C4");
            myTextElement.style.color = 'black';
            playSeffects();
        }
        else if (inputValue === "E") {
            let myTextElement = document.getElementById("E4");
            myTextElement.style.color = 'black';
            playSeffects();
        }
         else {
            alert("Wrong Guess!");
            playSeffects2();
        }
    }


    if(dupli === 9){
        let ques = document.getElementById("quest");
            ques.textContent = 'Audio editor and recording software';
    }else if(dupli === 17){
        let ques = document.getElementById("quest");
            ques.textContent = 'Operating system supported by Audacity but not by FL Studio';
    }else if(dupli === 22){
        let ques = document.getElementById("quest");
            ques.textContent = 'Similar with “fruity” but with unlimited access to the software ';
    }
}

// PAGE 2


var dupli2 = 0;


function changecolor2() {
    const inputValuee = document.getElementById("inputText2").value;
    
    if (dupli2 < 6){
        if(inputValuee === "EXPORT"){
            let elements = document.querySelectorAll('.q5');
            elements.forEach(element => {element.style.color = 'black';});
            dupli2 = 6;
            playSeffects();
        }
        else if (inputValuee === "E") {
            let myTextElement = document.getElementById("E5");
            myTextElement.style.color = 'black';
            dupli2++;
            playSeffects();
        }
        else if (inputValuee === "X") {
            let myTextElement5 = document.getElementById("X5");
            myTextElement5.style.color = 'black'; 
            dupli2 += 1;
            playSeffects();
        }
        else if (inputValuee === "P") {
            let myTextElement = document.getElementById("P5");
            myTextElement.style.color = 'black';
            dupli2 += 1;
            playSeffects();
        }
        else if (inputValuee === "O") {
            let myTextElement = document.getElementById("O5");
            myTextElement.style.color = 'black';
            dupli2 += 1;
            playSeffects();
        }  
        else if (inputValuee === "R") {
            let myTextElement = document.getElementById("R5");
            myTextElement.style.color = 'black';
            dupli2 += 1;
            playSeffects();
        }else if (inputValuee === "T") {
            let myTextElement = document.getElementById("T5");
            myTextElement.style.color = 'black';
            dupli2 += 1;
            playSeffects();
        }
         else {
            alert("Wrong Guess!");
            playSeffects2();
        }
    }else if (dupli2 >= 6 && dupli2 < 10){
        if(inputValuee === "EULA"){
            let elements = document.querySelectorAll('.q6');
            elements.forEach(element => {element.style.color = 'black';});
            dupli2 = 10;
            playSeffects();
        }
        else if (inputValuee === "E") {
            let myTextElement = document.getElementById("E6");
            myTextElement.style.color = 'black';
            dupli2++;
            playSeffects();
        }
        else if (inputValuee === "U") {
            let myTextElement5 = document.getElementById("U6");
            myTextElement5.style.color = 'black'; 
            dupli2 += 1;
            playSeffects();
        }
        else if (inputValuee === "L") {
            let myTextElement = document.getElementById("L6");
            myTextElement.style.color = 'black';
            dupli2 += 1;
            playSeffects();
        }
        else if (inputValuee === "A") {
            let myTextElement = document.getElementById("A6");
            myTextElement.style.color = 'black';
            dupli2 += 1;
            playSeffects();
        }  
        else {
            alert("Wrong Guess!");
            playSeffects2();
        }
    }else if (dupli2 >= 10 && dupli2 < 18){
        if(inputValuee === "IPRIGHTS"){
            let elements = document.querySelectorAll('.q7');
            elements.forEach(element => {element.style.color = 'black';});
            dupli2 = 18;
            playSeffects();
        }
        else if (inputValuee === "I") {
            let myTextElement = document.getElementById("I7");
            let myTextElement5 = document.getElementById("I71");
            myTextElement5.style.color = 'black';
            myTextElement.style.color = 'black';
            dupli2+=2;
            playSeffects();
        }
        else if (inputValuee === "P") {
            let myTextElement5 = document.getElementById("P7");
            myTextElement5.style.color = 'black'; 
            dupli2 += 1;
            playSeffects();
        }
        else if (inputValuee === "R") {
            let myTextElement = document.getElementById("R7");
            myTextElement.style.color = 'black';
            dupli2 += 1;
            playSeffects();
        }
        else if (inputValuee === "G") {
            let myTextElement = document.getElementById("G7");
            myTextElement.style.color = 'black';
            dupli2++;
            playSeffects();
        }
        else if (inputValuee === "H") {
            let myTextElement5 = document.getElementById("H7");
            myTextElement5.style.color = 'black'; 
            dupli2 += 1;
            playSeffects();
        }
        else if (inputValuee === "T") {
            let myTextElement = document.getElementById("T7");
            myTextElement.style.color = 'black';
            dupli2 += 1;
            playSeffects();
        }
        else if (inputValuee === "S") {
            let myTextElement = document.getElementById("S7");
            myTextElement.style.color = 'black';
            dupli2 += 1;
            playSeffects();
        }   
        else {
            alert("Wrong Guess!");
            playSeffects2();
        }
    }else if (dupli2 >= 18){
        if(inputValuee === "LICENSE"){
            let elements = document.querySelectorAll('.q8');
            elements.forEach(element => {element.style.color = 'black';});
            playSeffects();
        }
        else if (inputValuee === "L") {
            let myTextElement = document.getElementById("L8");
            myTextElement.style.color = 'black';
            playSeffects();
        }
        else if (inputValuee === "I") {
            let myTextElement5 = document.getElementById("I8");
            myTextElement5.style.color = 'black'; 
            playSeffects();
        }
        else if (inputValuee === "C") {
            let myTextElement = document.getElementById("C8");
            myTextElement.style.color = 'black';
            playSeffects();
        }
        else if (inputValuee === "E") {
            let myTextElement = document.getElementById("E8");
            myTextElement.style.color = 'black';
            let myTextElement6 = document.getElementById("E81");
            myTextElement6.style.color = 'black';
            playSeffects();
        } 
        else if (inputValuee === "N") {
            let myTextElement = document.getElementById("N8");
            myTextElement.style.color = 'black';
            playSeffects();
        }
        else if (inputValuee === "S") {
            let myTextElement5 = document.getElementById("S8");
            myTextElement5.style.color = 'black'; 
            playSeffects();
        }
        else {
            alert("Wrong Guess!");
            playSeffects2();
        }
    }

    if(dupli2 === 6){
        let ques = document.getElementById("quest2");
            ques.textContent = 'Specifies in detail the rights and restrictions which apply to the use of the software';
    }else if(dupli2 === 10){
        let ques = document.getElementById("quest2");
            ques.textContent = 'Protects against unauthorised use.';
    }else if(dupli2 === 18){
        let ques = document.getElementById("quest2");
            ques.textContent = 'A permit from an authority to own or use something';
    }

    

// COmments nako dupli (should we equal to how many letters on 1st answer so that 
// dili mo change color ang sunod na answer nga same og letter)
}