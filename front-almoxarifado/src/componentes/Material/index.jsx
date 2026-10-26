import { useEffect, useState } from 'react'
import {DadosMaterial} from  '../../Apis/MaterialApi'
import './tabela.css'

export function TabelaMaterial(){

  const [dadosM, setdadosM] = useState([])

  useEffect(()=>{
    async function CarregaDadosMaterial() {
     const dadosApi = await DadosMaterial();
      setdadosM(dadosApi)
    }
    CarregaDadosMaterial()
  },[])




    return(
     <main>
        <h2>Tabela Material</h2>

       <table className='Tabela-material'>
        <tbody>
        <tr>
          <th className='th-principal'>Nome material</th>
          <th className='th-principal'>Codigo material</th>
          <th className='th-principal'>unida de Medida</th>
        </tr>

        </tbody>
      <tbody>

              {dadosM.map((obj)=>(
                <tr key={obj.codMaterial}>
               <td className='td-dados'>{obj.nomeMaterial}</td>
               <td className='td-dados'>{obj.codMaterial}</td>
               <td className='td-dados'>{obj.unidadeMedida}</td>
               </tr>
              ))}

      </tbody>
      </table>
    </main>
    )
}