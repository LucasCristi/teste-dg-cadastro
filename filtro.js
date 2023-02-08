const listaDeCadastros = document.querySelector("[data-cadastros]");

async function filtroDeDados() {
  const conexao = await fetch("http://localhost:3000/cadastro");
  const conexaoConvertida = await conexao.json();

  listaDeCadastros.innerHTML = "";
  const seletor = document.getElementById("selected");
  if (seletor.value === "idade") {
    conexaoConvertida.sort((a, b) => a.idade - b.idade);
    conexaoConvertida.forEach((element) => {
        listaDeCadastros.innerHTML += `<div class="resultado-filtrado"><ol><li> ${element.idade}</li><li> ${element.nome}</li><li> ${element.cidade}</li></ol></div> `;
    });
  } else if(seletor.value === "nome"){
    conexaoConvertida.sort((a,b) => a.nome.localeCompare(b.nome))
    conexaoConvertida.forEach((element) => {
        listaDeCadastros.innerHTML += `<div class="resultado-filtrado"><ol><li> ${element.nome}</li><li> ${element.idade}</li><li> ${element.cidade}</li></ol></div> `;
      });
  } else if(seletor.value === "cidade"){
    conexaoConvertida.sort((a,b) => a.cidade.localeCompare(b.cidade))
    conexaoConvertida.forEach((element) => {
        listaDeCadastros.innerHTML += `<div class="resultado-filtrado"><ol><li> ${element.cidade}</li><li> ${element.nome}</li><li> ${element.idade}</li></ol></div> `;
      });
  }
}

const seletor = document.getElementById("selected");
selected.addEventListener("click", (evento) => {
  filtroDeDados();
});
