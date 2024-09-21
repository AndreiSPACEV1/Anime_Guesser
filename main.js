import _, { update } from "lodash"; // Import ES6 pentru lodash
import * as data from "./caractere.js";

let caractere = data.caractere;
caractere = _.shuffle(caractere);

let getRandomCaracter = document.querySelector(".getAnimeCharacter");
let img = document.getElementById("animeImage");
let myCard = document.querySelector(".img-anime");
let score_element = document.getElementById("result");
let gen_buttons = document.querySelector(".buttons-group");
let raspuns = document.getElementById("raspunsul");
let rasp_element = document.querySelector(".raspunsul");
let buttons = document.querySelectorAll(".buttons-group button");
let textMode = document.querySelector(".TextMode");
let Btn_B = document.getElementById("button-B");
let Btn_G = document.getElementById("button-G");
const checkbox = document.getElementById('neumorphism');
let isFlipped = false;

getRandomCaracter.style.display="none";
rasp_element.style.display="none";
// Verifică dacă checkbox-ul este bifat

// Adaugă un event listener pentru a verifica starea la click
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        console.log('Checkbox-ul a fost bifat.');
        textMode.innerHTML = "AUTO";
        textMode.style.color = "#000";
        getRandomCaracter.style.display="none";
        rasp_element.style.display="none";

        if(gen_buttons.disabled){
            GetNextRandomCaracter();
        }

    } else {
        console.log('Checkbox-ul a fost debifat.');
        textMode.innerHTML = "MANUAL";
        textMode.style.color = "#ffffff";
        getRandomCaracter.style.display="block";
        rasp_element.style.display="block";
    }
});


let indexCaracter = 0;
let score = 0;



getRandomCaracter.addEventListener("click", function getRandomCaracter() {
  img.src = caractere[indexCaracter + 1].path;
  indexCaracter++;
  updateScore();
  updateCLSRaspuns();
  blockButton(false);
  maDegugherer();
  
});

gen_buttons.addEventListener("click", (event) => {

    if (gen_buttons.disabled) {
        console.log('Checkbox-ul este dezactivat.');
    } else {
     
    
        if (checkbox.checked) {
            verifyGender(event);
            GetNextRandomCaracter();
          
           
        }
            else{
                blockButton(true);
                verifyGender(event);
                
            }


  

}
});

function verifyGender(event){
  let correctButtonSFX = new Audio('yup.mp3');
  let wrongButtonSFX = new Audio('nope.wav');
    if (event.target.textContent[0] == caractere[indexCaracter].gen) {
 
        score++;
        updateScore();
        updateRaspuns(true);
        //correctButtonSFX.play();
     
      } else {
        updateScore();
        updateRaspuns(false);
       // wrongButtonSFX.play();
      }
} 




function GetNextRandomCaracter(bool)
{
    console.log("GetNextRandomCaracter");
    getRandomCaracter.click();
}

function updateScore() {
  score_element.innerHTML = `Score: ${score} <br>Pg: ${indexCaracter + 1}/127`;
}

function updateCLSRaspuns() {
  raspuns.innerHTML = "-";
  raspuns.style.color = "#ffff";
}

// function updateRaspuns(x) {
//   // #56d14f - verde Corect!
//   // #d14f4f - rosu Gresit!
//   if (x === true) {
//     raspuns.innerHTML = "Corect!";

//     raspuns.style.color = "#56d14f";
//   } else {
//     raspuns.innerHTML = "Gresit!";

//     raspuns.style.color = "#d14f4f";
//   }
// }

function blockButton(x) {
 Btn_B.disabled = x;
 Btn_G.disabled = x;
 gen_buttons.disabled = x;
}
let maDegugherer = () => {
    console.log(caractere[indexCaracter].gen);
    console.log(indexCaracter);
};

function updateRaspuns(isCorrect ) {
  
    const page = document.getElementById('result');
  
    // Elimină clasele anterioare
    page.classList.remove('bg-correct', 'bg-wrong');
  
    if (isCorrect) {
      raspuns.innerHTML = "Wrong";
      raspuns.style.color = "#56d14f";
      
      // Adaugă clasa pentru animația de corect
      page.classList.add('bg-correct');
    } else {
      raspuns.innerHTML = "Correct";
      raspuns.style.color = "#d14f4f";
      
      // Adaugă clasa pentru animația de greșit
      page.classList.add('bg-wrong');
    }
    console.log("ceva");
    // Resetează animația după terminare
    setTimeout(() => {
      page.classList.remove('bg-correct', 'bg-wrong');
    }, 500); // Timpul animației este de 1 secundă
  
  }


function start() {
  img.src = caractere[indexCaracter].path;
 
  updateScore();
  
  updateCLSRaspuns();
  
   maDegugherer();

}

start();




console.log(caractere);

