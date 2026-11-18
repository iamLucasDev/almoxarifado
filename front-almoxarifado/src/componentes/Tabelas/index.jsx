
import { FormularioPost } from '../Formulario'
import {useGet} from '../../hooks/UseGet'
import './tabelas.css'

export function Tabelas(){

    const { dadosDeposito,dadosMaterial,dadosMovi,    
            isLoadingDeposito,isLoadingMaterial,isLoadingMovi,
            errorDeposito,errorMaterial,errorMovi } =  useGet();
            
        return (
            <>
                <section>
                    <h2>Tabela Deposito</h2>

                    {isLoadingDeposito && <p className='loading'>Carregando tabela Deposito...</p>}

                    {errorDeposito && (
                     <div className='erroTable'>
                            <h3>Não foi possível carregar os depósitos.</h3>
                            <p>Verifique sua conexão com o servidor e tente novamente.</p>
                            <p className="erroRequisicao">Erro na requisição</p>
                     </div>
                    )}
                
                
                   {!isLoadingDeposito && !errorDeposito && (
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
                   )}
                </section>

                <section>
                    <h2>Tabela Material</h2>

                {isLoadingMaterial && <p className='loading'>Carregando tabela materiais...</p>}

                   {errorMaterial && (
                     <div className='erroTable'>
                            <h3>Não foi possível carregar os materiais.</h3>
                            <p>Verifique sua conexão com o servidor e tente novamente.</p>
                            <p className="erroRequisicao">Erro na requisição</p>
                     </div>
                    )}

                
               {!isLoadingMaterial && !errorMaterial && (

                    <table className='Tabela-material'>
                        <tbody>
                            <tr>
                                <th className='th-principal'>Nome material</th>
                                <th className='th-principal'>Codigo material</th>
                                <th className='th-principal'>Unidade de Medida</th>
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
               )}
                </section>

                <section>
                    <h2>Movimentaçoes</h2>

                 {isLoadingMovi && <p className='loading'>Carregando tabela de movimentações...</p>}

                 {errorMovi && (
                     <div className='erroTable'>
                            <h3>Não foi possível carregar as movimentações.</h3>
                            <p>Verifique sua conexão com o servidor e tente novamente.</p>
                            <p className="erroRequisicao">Erro na requisição</p>
                     </div>
                    )}


               {!isLoadingMovi && !errorMovi && (
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
                                    <td className='td-dados td-dados-tipo'style={{color: obj.tipoMovimentacao === "Entrada" ? "green": "red"}}> {obj.tipoMovimentacao}</td>
                                    <td className='td-dados'>{obj.qtdMovimentacao}</td>
                                    <td className='td-dados'>{new Date(obj.dataHora).toLocaleString('pt-BR')}</td>
                                    <td className='td-dados'>{obj.estoque.qtdEstoque}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
               )}
                    <FormularioPost></FormularioPost>
                </section>
            </>
        )

}