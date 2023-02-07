async function listaCadastros() {
    const conexao = await fetch("http://localhost:3000/cadastro");
    const conexaoConvertida = await conexao.json();
      // console.log(conexaoConvertida);
    return conexaoConvertida;
  }

  export const conexaoApi = {
    listaCadastros,
  };