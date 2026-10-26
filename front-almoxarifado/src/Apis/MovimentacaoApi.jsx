

   export async function DadosMovimentacao() {
       
        try{
           const resposta =   await fetch ('http://localhost:8080/movimentacoes')

         if (resposta.ok === false) {
         throw new Error("Erro ao buscar a movimentação");
         }
          return await resposta.json();
      
        }catch(erro){
          console.log("Ocorreu um erro:", erro.message);
          throw erro;
        }
    }