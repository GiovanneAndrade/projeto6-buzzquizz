const urlApi = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"

let id = 10;

let banner = document.querySelector(".banner");
let questions = [];

getId(id);

function getId(id) {
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
    quizzPage.innerHTML= "";
    for (let i = 0; i < questions.length; i++) {
        quizzPage.innerHTML +=
                `<div class="card-quiz">   
                    <header style="background-color:${questions[i].color}">
                        <h1>${questions[i].title}</h1>
                    </header>
                    <ul>
                        ${criarCards(questions[i].answers)}
                    </ul>
                </div>`
    }
}

function criarCards(answers) {
    let card = '';
    for (let i = 0; i < answers.length; i++) {
        card+=`  <li>
            <img src="${answers[i].image}" alt="">
                <h2>${answers[i].text}</h2>
                </li>`
    }
    return card;
}