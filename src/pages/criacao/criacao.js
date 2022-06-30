//desktop 1
export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
  <div class="formulario">
  <h1>Comece pelo começo</h1>
  <div class="inputs-desktop-8">
    <input type="text" placeholder="Título do seu quizz" >
    <input type="text" placeholder="URL da imagem do seu quizz" >
    <input type="text" placeholder="Quantidade de perguntas do quizz" >
    <input type="text" placeholder="Quantidade de níveis do quizz" >
  </div>
 <button class="botao-desktop-8" >Prosseguir pra criar perguntas</button>
</div>

   <div class="list">
   <button class="botao"> <a href="/#contact">pagina inicial</a></button>
  </div>
  <div class="list">
  
  <button><a class="botao" href="/#">exibição</a></button>
</div>
  `

  return container; 
}