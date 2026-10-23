import { useEffect, useState } from 'react'
import './material.css'

export function TabelaMaterial(){

  const [dadosM, setdadosM] = useState([])

  useEffect(()=>{
    DadosMaterial();
  })

     async function DadosMaterial() {
      const resposta =   await fetch ('http://localhost:8080/materiais')
      try{

       if (resposta.ok === false) {
       throw new Error("Erro ao buscar Materiai");
       }
         const dadosApi = await resposta.json();
         setdadosM(dadosApi)
      }catch(erro){
        console.log("Ocorreu um erro:", erro.message);
      }
  }


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
              
          {/* <th className='th-dados'>teste</th>
          <th className='th-dados'>d-09</th>
          <th className='th-dados'>KG</th> */}

      </tbody>
      </table>
    </main>
    )
}