import './movimentacao.css'
import { useEffect, useState } from 'react'
import {FormularioPost} from "../Formulario"

export function Movimentacoes(){


   const [dadosMovi, setdadosMovi] = useState([])
  
    useEffect(()=>{
      DadosMovimentacao();
    })
  
       async function DadosMovimentacao() {
        const resposta =   await fetch ('http://localhost:8080/movimentacoes')
        try{
  
         if (resposta.ok === false) {
         throw new Error("Erro ao buscar a movimentação");
         }
           const dadosApi = await resposta.json();
           setdadosMovi(dadosApi)
        }catch(erro){
          console.log("Ocorreu um erro:", erro.message);
        }
    }
    return(
    <main>
       <h2>Movimentaçoes</h2>
       <table className='Tabela-movimentacoes'>
        <tbody>
        <tr>
          <th className='th-principal'>Id</th>
          <th className='th-principal'>Codigo material</th>
          <th className='th-principal'>Codigo deposito</th>
          <th className='th-principal'>Tipo Moviemntação</th>
          <th className='th-principal'>Quantidade Movimentação</th>
          <th className='th-principal'>Data/hora</th>
          <th className='th-principal'>Estoque</th>
        </tr>
       </tbody>
       <tbody>

          
              {dadosMovi.map((obj)=>(
                <tr key={obj.idMovimentacao}>
               <td className='td-dados'>{obj.idMovimentacao}</td>
               <td className='td-dados'>{obj.estoque.material.codMaterial}</td>
               <td className='td-dados'>{obj.estoque.deposito.codDeposito}</td>
               <td className='td-dados'>{obj.tipoMovimentacao}</td>
               <td className='td-dados'>{obj.qtdMovimentacao}</td>
               <td className='td-dados'>{obj.dataHora}</td>
               <td className='td-dados'>{obj.estoque.qtdEstoque}</td>
               </tr>
              ))}
              
        {/* <tr>
          <th className='th-dados'>09</th>
          <th className='th-dados'>M-19</th>
          <th className='th-dados'>d-09</th>
          <th className='th-dados'>Entrada</th>
          <th className='th-dados'>16</th>
          <th className='th-dados'> 12:00 09/08/2026</th>
        </tr> */}
       </tbody>
      </table>
      <FormularioPost atualizarTabela={DadosMovimentacao}></FormularioPost>
    </main>
    )
}