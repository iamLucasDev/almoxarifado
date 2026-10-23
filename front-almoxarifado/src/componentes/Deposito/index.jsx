
import './deposito.css'
import { useEffect,useState } from 'react';

export function TabelaDeposito(){
 
     const [dados, setdados] = useState([]);


     useEffect(()=>{
           DadosEstoque()
     });

    async function DadosEstoque() {
      const resposta =   await fetch ('http://localhost:8080/deposito')
      try{

       if (resposta.ok === false) {
       throw new Error("Erro ao buscar depósitos");
       }
         const dadosApi = await resposta.json();
         setdados(dadosApi)
      }catch(erro){
        console.log("Ocorreu um erro:", erro.message);
      }
  }

  

return(
    <main>
      <h2>Tabela Deposito</h2>
      <table className='Tabela-deposito'>
        <tbody>
          <tr>
          <th className='th-principal'>Nome deposito</th>
          <th className='th-principal'>Codigo deposito</th>
        </tr>
        </tbody>

        <tbody>
           
             {dados.map((obj)=>(
               <tr key={obj.codDeposito}>
               <td className='td-dados'>{obj.nome}</td>
               <td className='td-dados'>{obj.codDeposito}</td>
               </tr>
             ))}
       
        </tbody>
      </table>
    </main>
  
)
}