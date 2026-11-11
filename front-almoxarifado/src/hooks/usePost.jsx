import { useState } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function usePost(){

  const [material, setMaterial] = useState('');
  const [deposito, setDeposito] = useState('');
  const [tipo, setTipo] = useState('');
  const [qtd, setQtd] = useState('');
  const [date, setdate] = useState('');


  const objApi = {

    "qtdMovimentacao": qtd,
    "dataHora": date,
    "tipoMovimentacao": tipo,
    "estoque": {
      "estoqueId": {
        "codMaterial": material,
        "codDeposito": deposito
      }
    }
  }

  
  async function AlteraTabela(dados) {
    const resposta = await fetch(
      'http://localhost:8080/movimentacoes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      }
    );

    if (!resposta.ok) {
      throw new Error('Erro ao cadastrar movimentação');
    }

    return resposta.json();
  }

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: AlteraTabela,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['movimentacoes']
      });
    }
  });

   return {setMaterial,material,setDeposito,deposito,setQtd,qtd,setTipo,tipo,setdate,date,mutation,objApi}
}