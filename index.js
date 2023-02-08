import { conexaoApi } from "./conectaApi.js";
const listaDeCadastros = document.querySelector("[data-cadastros]");

export default function constroiCardCadastros(nome, idade, cidade) {
  const cadastro = document.createElement("li");
  cadastro.className = "lista-cadastro";
  cadastro.innerHTML = `
    
  <div class="dados-cadastro">
  <ol><li> ${idade}</li><li> ${nome}</li><li> ${cidade}</li></ol>
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

const mostrarDados = document.getElementById("todos-os-dados")
mostrarDados.addEventListener("click", () => {
  listaDeCadastros.innerHTML = ""
  listaCadastrosNaTela();
})

