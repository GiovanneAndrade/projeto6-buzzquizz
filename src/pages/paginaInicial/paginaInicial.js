export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    
  paggina inicial   paggina inicial    paggina inicial    paggina inicial    paggina inicial 

  <div class="list">
  <button><a class="title" href="/#">exibição</a></button>
</div>
<div class="botao">
  <button><a href="/#about">criação</a></button>
</div>
  `

  return container; 
}