const url = 'https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes'
let dados;
initApi();
function initApi(){
    screenChange('page1');
    let promess = axios.get(url).then(response =>{
        dados = response.data;
        console.log(dados);
        createList(dados);
    }).catch(()=>console.log("Deu ruim"));
}

function createList(dados){
    let ulList = document.querySelector(".listAll");

    ulList.innerHTML="";
    for(let i = 0; i < dados.length; i++){
        ulList.innerHTML+=`
        <li onclick="showQuizz(${dados[i].id})">
            <img src="${dados[i].image}" alt="">
            <figcaption>${dados[i].title}</figcaption>
        </li>`
    }
}
function showQuizz(id){
    console.log(typeof id)
    getId(id);
    screenChange('page2');
}


//--------------------------------------------------------------formulario -giovanne

function teste (event){
    event.preventDefault()
    const input = document.querySelector(".input").value
    const input2 = document.querySelector(".input2").value
    const input3 = document.querySelector(".input3").value
    const input4 = document.querySelector(".input4").value
    const input5 = document.querySelector(".input5").value
    const input6 = document.querySelector(".input6").value
    const input7 = document.querySelector(".input7").value
    const input8 = document.querySelector(".input8").value
    const input9 = document.querySelector(".input9").value
    const input10 = document.querySelector(".input10").value
    const input11 = document.querySelector(".input11").value
    const input12 = document.querySelector(".input12").value
    const input13 = document.querySelector(".input13").value
    const input14 = document.querySelector(".input14").value
    const input15 = document.querySelector(".input15").value
    const input16 = document.querySelector(".input16").value
    const input17 = document.querySelector(".input17").value
    const input18 = document.querySelector(".input18").value
    const input19 = document.querySelector(".input19").value
    const input20 = document.querySelector(".input20").value
    const input21 = document.querySelector(".input21").value
    const input22 = document.querySelector(".input22").value
    const input23 = document.querySelector(".input23").value
    const input24 = document.querySelector(".input24").value
    const input25 = document.querySelector(".input25").value
    const input26 = document.querySelector(".input26").value
    const input27 = document.querySelector(".input27").value
    const input28 = document.querySelector(".input28").value
    const input29 = document.querySelector(".input29").value
    const input30 = document.querySelector(".input30").value
    const input31 = document.querySelector(".input31").value
    const input32 = document.querySelector(".input32").value
    const input33 = document.querySelector(".input33").value
    const input34 = document.querySelector(".input34").value
    const input35 = document.querySelector(".input35").value
    const input36 = document.querySelector(".input36").value
    const input37 = document.querySelector(".input37").value
    const input38 = document.querySelector(".input38").value
    const input39 = document.querySelector(".input39").value
    const input40 = document.querySelector(".input40").value
    const input41 = document.querySelector(".input41").value
    const input42 = document.querySelector(".input42").value
    
    const novoQuizz = {
      
      
         /* id, */
         title: input,
         image: input2,
         questions: [
           {
             title: input5,
             color: input6,
             answers: [
               {
                 text: input7,
                 image: input8,
                 isCorrectAnswer: true
               },
               {
                 text: input9,
                 image: input10,
                 isCorrectAnswer: false
               },
               {
                 text: input11,
                 image: input12,
                 isCorrectAnswer: false
               },
               {
                 text: input13,
                 image: input14,
                 isCorrectAnswer: false
               }
             ]
           },
           {
             title: input15,
             color: input16,
             answers: [
               {
                 text: input17,
                 image: input18,
                 isCorrectAnswer: true
               },
               {
                 text: input19,
                 image: input20,
                 isCorrectAnswer: false
               },
               {
                 text: input21,
                 image: input22,
                 isCorrectAnswer: false
               },
               {
                 text: input23,
                 image: input24,
                 isCorrectAnswer: false
               }
             ]
           },
           {
             title: input25,
             color: input26,
             answers: [
               {
                 text: input27,
                 image: input28,
                 isCorrectAnswer: true
               },
               {
                 text: input29,
                 image: input30,
                 isCorrectAnswer: false
               },
               {
                 text: input31,
                 image: input32,
                 isCorrectAnswer: false
               },
               {
                 text: input33,
                 image: input34,
                 isCorrectAnswer: false
               }
             ]
           }
         ],
         levels: [
           {
             title: input35,
             image: input36,
             text: input38,// mudar pra texto
             minValue: input37
           },
           {
             title: input39,
             image: input40,
             text: input42,
             minValue: input41,
           }
         ]
       
   }
   console.log(novoQuizz);
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", novoQuizz )
    promise.then(alertarpost)
    function alertarpost(resposta) {
      console.log('ALERTA POST');
      console.log(resposta);
    }

    const novoQuizzSerializado = JSON.stringify(novoQuizz);
     localStorage.setItem("QUIZZ", novoQuizzSerializado);



    console.log(input, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13, input14,input15,input16,input17,input18, input19, input20, input21, input22, input23, input24, input25, input26, input27, input28, input29, input30, input31, input32, input33, input34, input35, input36, input37, input38, input39, input40, input41, input42)
 }
    const form = document.querySelector("form")
  form.addEventListener("submit", teste)


    const btn1 = document.querySelector(".btnCreate") 
    const btn = document.querySelector(".btn-prosseguir1")
    const btn2 = document.querySelector(".btn-prosseguir2")
    const btn3 = document.querySelector(".btn-prosseguir3")
    /* const formGroup = document.querySelector(".form-group1")
    const desktop9 = document.querySelector(".form-group")
    const desktop10 = document.querySelector(".form-group2") */
    const formGroup = document.querySelector(".form-group")
    const formGroup2 = document.querySelector(".form-group2")
    const formGroup3 = document.querySelector(".form-group3")
    const formGroup4 = document.querySelector(".form-group4")
    const paginaInicial = document.querySelector(".page1")
    const paginaDeCadatro = document.querySelector(".cadastro-quizz")
    


    btn1.addEventListener("click", (event) => {
        event.preventDefault() 
        paginaInicial.classList.add('inactive')
        formGroup.classList.remove('inactive')
        paginaDeCadatro.classList.remove('inactive') 
        paginaDeCadatro.classList.add('active') 
       /*  formGroup.classList.add('active') */
  
    })


    btn.addEventListener("click", (event) => {
        event.preventDefault() 
        formGroup.classList.add('inactive')
        formGroup2.classList.remove('inactive')
        
        
        formGroup2.classList.add('active')

  
    })
   
   
   btn2.addEventListener("click", (event) => {
       event.preventDefault() 
      formGroup2.classList.remove('active')
      formGroup2.classList.add('inactive')
      formGroup3.classList.remove('inactive')
      formGroup3.classList.add('active')

   })

   btn3.addEventListener("submit", (event) => {
    event.preventDefault() 
   formGroup3.classList.remove('active')
   formGroup3.classList.add('inactive')
   formGroup4.classList.add('active')

})

  //    FRANCISCO 

 const usuario = localStorage.getItem('QUIZZ');
 /* console.log(usuario); */
 
 const listaSerializada = localStorage.getItem("QUIZZ");
 const QUIZZ = JSON.parse(listaSerializada);
 console.log(QUIZZ)



// --------------------QUIZZunico


 /* const userDiv = document.querySelector('.user-quizz')

 
     userDiv.innerHTML += `
     <li>
     <img src="${QUIZZ.image}">
     <figcaption>${QUIZZ.title}</figcaption>
     </li>
     ` */

 

const bt = document.getElementById('bt')
/* document.getElementById('bt').disabled = true */
const input = document.querySelector('.input')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const input4 = document.querySelector('.input4')

console.log(input.value)


const inputs = document.querySelectorAll('form-group input')

inputs.forEach((element) => {
   
   element.addEventListener('onkeypress', (event) => {
      event.preventDefault();
      
   })
});