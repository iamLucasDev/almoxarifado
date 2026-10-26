
import './tabela.css'
import { useEffect,useState } from 'react';
import {DadosEstoque} from '../../Apis/DepositoApi'


export function TabelaDeposito(){
 
     const [dados, setdados] = useState([]);


     useEffect(()=>{
        async function  CarregaDados() {
          const dadosApi = await DadosEstoque()
          setdados(dadosApi)
        }
        CarregaDados()
     },[])


  

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