  export  async function DadosMaterial() {
    
      try{
          const resposta =   await fetch ('http://localhost:8080/materiais')

       if (resposta.ok === false) {
       throw new Error("Erro ao buscar Materiai");
       }
         return  await resposta.json();

      }catch(erro){
        console.log("Ocorreu um erro:", erro.message);
        throw erro;
      }
  }