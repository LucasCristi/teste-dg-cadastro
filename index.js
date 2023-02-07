import { conexaoApi } from "./conectaApi.js";
const listaDeCadastros = document.querySelector("[data-cadastros]");

function constroiCardCadastros(nome, idade, cidade) {
  const cadastro = document.createElement("li");
  cadastro.className = "lista-cadastro";
  cadastro.innerHTML = `
    
  <div class="dados-cadastro">
          <h1>${nome} </h1>
          <p>${idade} </p>
         <p>${cidade} </p>
  </div>
      `;

  return cadastro;
}

async function listaCadastrosNaTela() {
  try {
    const listaApi = await conexaoApi.listaCadastros();
    listaApi.forEach((element) => {
      listaDeCadastros.appendChild(
        constroiCardCadastros(element.nome, element.idade, element.cidade)
      );
    });
  } catch {
    listaDeCadastros.innerHTML = `<h2 class="">Não foi possível carregar os cadastros</h2> `;
  }
}

listaCadastrosNaTela();

console.log()
