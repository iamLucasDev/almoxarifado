import { DadosEstoque } from '../Apis/DepositoApi'
import { DadosMaterial } from '../Apis/MaterialApi'
import { DadosMovimentacao } from '../Apis/MovimentacaoApi'
import {useQuery} from '@tanstack/react-query'


   const queryKeys = {
     materiais: ["materiais"],
     estoque: ["estoque"],
     movimentacoes: ["movimentacoes"]
   };


export function useGet(){

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


   
      return {
        dadosDeposito: dadosDeposito ?? [],
        dadosMaterial: dadosMaterial ?? [],
        dadosMovi: dadosMovi ?? [],

        isLoadingDeposito,
        isLoadingMaterial,
        isLoadingMovi,

        errorDeposito,
        errorMaterial,
        errorMovi
    };
    
}