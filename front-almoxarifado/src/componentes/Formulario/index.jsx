import { useState } from "react";
import '../Formulario/form.css'
import { useMutation, useQueryClient } from '@tanstack/react-query'



export function FormularioPost() {



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



  async function AlteraTabela() {
    const resposta = await fetch(
      'http://localhost:8080/movimentacoes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objApi)
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


  function Enviar(e){
    e.preventDefault();

    mutation.mutate(objApi)
  }


  return (
    <div>
      <form onSubmit={Enviar} method='post' className='form-movimentacao'>
        <h3>Formulario movimentacões</h3>
        <fieldset className='filedset-movi'>
          <label>Escolha o id material</label>
          <select id="idMaterial" name="idMaterial" value={material} onChange={(evento) => setMaterial(evento.target.value)}>
            <option value="" disabled>Escolha uma opção</option>
            <option value="M-100">M-100</option>
            <option value="M-101">M-101</option>
            <option value="M-102">M-102</option>
            <option value="M-103">M-103</option>
            <option value="M-104">M-104</option>
          </select>

          <label>Escolha o id estoque</label>
          <select id="idDeposito" name="idDeposito" value={deposito} onChange={(evento) => setDeposito(evento.target.value)}>
            <option value="" disabled>Escolha uma opção</option>
            <option value="D-01">D-01</option>
            <option value="D-02">D-02</option>
            <option value="D-03">D-03</option>
          </select>

          <label>Escolha O tipo de Movimentação</label>
          <select id="idTipo" name="idTipo" value={tipo} onChange={(evento) => setTipo(evento.target.value)}>
            <option value="" disabled>Escolha uma opção</option>
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saida</option>
          </select>

          <label>Quantidade:</label>
          <input type="number" name="qtd" id="qtd" placeholder='quantidade de movimentação' value={qtd} onChange={(evento) => setQtd(evento.target.value)} />

          <label>Data e hora da Movimentação</label>
          <input type='datetime-local'
            name="dataHora" id="dataHora" value={date} onChange={(evento) => setdate(evento.target.value)} />

          <button type="submit" className="btn">Registrar</button>

        </fieldset>

      </form>
    </div>
  )


}
