const urlApi = "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes"

// let id = 1;

let banner = document.querySelector(".banner");
let questions = [];
let answers = [];

// getId(id);

function getId(id) {
    // screenChange('page2');
    let numero = id;
    let promise = axios.get(`${urlApi}/${numero}`);
    promise.then(carregarQuizz);
}

function carregarQuizz(response) {
    console.log("Criar Quiz");
    let array = response.data;
    questions = array.questions;
    let quizzPage = document.querySelector(".pagina-quiz");
    let banner = document.querySelector(".banner");

    console.log(array);


    banner.innerHTML = `<h1>${array.title}</h1>
                        <img src="${array.image}">`
    quizzPage.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        quizzPage.innerHTML +=
            `<div class="card-quiz">   
                    <header style="background-color:${questions[i].color}">
                        <h1>${questions[i].title}</h1>
                    </header>
                    <ul class="cards">
                        ${criarCards(embaralhar(questions[i].answers))}
                    </ul>
                </div>`
    }
}
function embaralhar(array) {
    return array.sort((item) => Math.random() - 0.5)
}

function criarCards(answers) {
    let card = '';
    for (let i = 0; i < answers.length; i++) {
        card += `  <li onclick="saveCard(this, ${answers[i].isCorrectAnswer})">
            <img src="${answers[i].image}" alt="">
                <h2>${answers[i].text}</h2>
                </li>`
    }
    return card;
}

function saveCard(element,pickColor) {
    element.setAttribute("class", "selecionado");
    if(pickColor === true){
        element.setAttribute("class", "color")
    }else{
        element.setAttribute("class","color1")
    }
    getSelections();
}

function getSelections() {
    for (let i = 0; i < questions.length; i++) {
        let ul = document.querySelectorAll("ul")[i];
        ul.addEventListener("click", ()=>{
            let li = document.querySelector("li");
            console.log(li)
        })
    }
}