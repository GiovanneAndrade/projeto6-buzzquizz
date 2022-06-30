export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `

exibição  exibição exibição exibição exibição
<div class="list">
   <button class="botao"> <a href="/#contact">pagina inicial</a></button>
  </div>
  <div class="list">
  <button><a class="title" href="/#">exibição</a></button>
</div>

  `
  return container; 
}