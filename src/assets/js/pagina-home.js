const url = 'https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes'
let dados;
// initApi();
function initApi(){
    screenChange('page1');
    let promess = axios.get(url).then(response =>{
        dados = response.data;
        console.log(dados);
        createList();
    }).catch(()=>console.log("Deu ruim"));
}

function createList(){
    let ulList = document.querySelector(".listAll");

    ulList.innerHTML="";
    for(let i = 0; i < dados.length; i++){
        ulList.innerHTML+=`
        <li>
            <img src="${dados[i].image}" alt="">
            <figcaption>${dados[i].title}</figcaption>
        </li>`
    }
}