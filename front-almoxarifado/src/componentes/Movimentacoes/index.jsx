import './tabela.css'
import { useEffect, useState } from 'react'
import {FormularioPost} from "../Formulario"
import {DadosMovimentacao} from '../../Apis/MovimentacaoApi'

export function Movimentacoes(){


   const [dadosMovi, setdadosMovi] = useState([])
  
   
    async function CarregaDadosApiMovi() {
        const dadosApi = await DadosMovimentacao();
        setdadosMovi(dadosApi)
      }

      useEffect(()=>{
        CarregaDadosApiMovi();
      },[])


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
               <td className='td-dados'>{new Date(obj.dataHora).toLocaleString('pt-BR')}</td>
                <td className='td-dados'>{obj.estoque.qtdEstoque}</td>
               </tr>
              ))}

       </tbody>
      </table>
      <FormularioPost atualizarTabela={CarregaDadosApiMovi}></FormularioPost>
    </main>
    )
}