async function listaCadastros() {
    const conexao = await fetch("http://localhost:3000/cadastro");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
  }

  async function buscaCidade(cidadePesquisada){
    const conexao = await fetch(`http://localhost:3000/cadastro?q=${cidadePesquisada}`)
    const conexaoConvertida = conexao.json()
    return conexaoConvertida
  }
  
  
  export const conexaoApi = {
    listaCadastros,
    buscaCidade
  };