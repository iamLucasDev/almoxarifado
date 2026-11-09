
import { FormularioPost } from '../Formulario'
import { DadosEstoque } from '../../Apis/DepositoApi'
import { DadosMaterial } from '../../Apis/MaterialApi'
import { DadosMovimentacao } from '../../Apis/MovimentacaoApi'
import {useQuery} from '@tanstack/react-query'
import './tabelas.css'

   const queryKeys = {
     materiais: ["materiais"],
     estoque: ["estoque"],
     movimentacoes: ["movimentacoes"]
   };

export function Tabelas(){
   
   const {
     data: dadosDeposito,
     isLoading : isLoadingDeposito,
     error:  errorDeposito
    } = useQuery({
     queryKey: queryKeys.estoque,
     queryFn: DadosEstoque
    });


    const {
      data: dadosMaterial,
      isLoading:  isLoadingMaterial,
      error: errorMaterial
     } = useQuery({
      queryKey: queryKeys.materiais,
      queryFn: DadosMaterial
     });
    
    const {
      data: dadosMovi,
      isLoading:  isLoadingMovi,
      error:  errorMovi
     } = useQuery({
      queryKey: queryKeys.movimentacoes,
      queryFn: DadosMovimentacao
     });


    
    if(isLoadingMaterial || isLoadingDeposito || isLoadingMovi){
        return <p>Carregando</p>
    }

    if(errorMaterial || errorDeposito || errorMovi){
        return <p>error</p>
    }
       
        
        return (
            <>
                <section>
                    <h2>Tabela Deposito</h2>
                    <table className='Tabela-deposito'>
                        <tbody>
                            <tr>
                                <th className='th-principal'>Nome deposito</th>
                                <th className='th-principal'>Codigo deposito</th>
                            </tr>
                        </tbody>

                        <tbody>

                            {dadosDeposito.map((obj) => (
                                <tr key={obj.codDeposito}>
                                    <td className='td-dados'>{obj.nome}</td>
                                    <td className='td-dados'>{obj.codDeposito}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </section>

                <section>
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

                            {dadosMaterial.map((obj) => (
                                <tr key={obj.codMaterial}>
                                    <td className='td-dados'>{obj.nomeMaterial}</td>
                                    <td className='td-dados'>{obj.codMaterial}</td>
                                    <td className='td-dados'>{obj.unidadeMedida}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </section>

                <section>
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


                            {dadosMovi.map((obj) => (
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
                    <FormularioPost></FormularioPost>
                </section>
            </>
        )

}