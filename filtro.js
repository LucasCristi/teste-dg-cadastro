const listaDeCadastros = document.querySelector("[data-cadastros]");

async function filtroDeDados() {

    const arrayDeDados = []
    
    const conexao = await fetch("http://localhost:3000/cadastro");
    const conexaoConvertida = await conexao.json();
    
    // arrayDeDados.push(conexaoConvertida)
   conexaoConvertida.sort((a,b) => a.idade - b.idade)
   console.log(conexaoConvertida)
//    conexaoConvertida.sort((a,b) => a.nome.localeCompare(b.nome))
//    console.log(conexaoConvertida)
//    conexaoConvertida.sort((a,b) => a.cidade.localeCompare(b.cidade))
//    console.log(conexaoConvertida)
    
    listaDeCadastros.innerHTML = ""
    
   
    
}

const filtro = document.getElementById("filtro")
filtro.addEventListener("click", () => {
    filtroDeDados()
})
