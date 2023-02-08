import { conexaoApi } from "./conectaApi.js";
import constroiCardCadastros from "./index.js";

    async function buscarCidade (evento){
        evento.preventDefault()

        const cidadePesquisada = document.querySelector("[data-pesquisa]").value
    
        const busca = await conexaoApi.buscaCidade(cidadePesquisada)

        const listaDeCadastros = document.querySelector("[data-cadastros]");
        listaDeCadastros.innerHTML = ""
        busca.forEach(elemento => {
            listaDeCadastros.appendChild(
                constroiCardCadastros(
                    elemento.nome,
                    elemento.idade,
                    elemento.cidade
                )
            )
        });
    }
     
    const botaoPesquisa = document.getElementById("pesquisar")
    botaoPesquisa.addEventListener("click", (evento) => {
        buscarCidade(evento)
    })