import {usePost} from '../../hooks/usePost'
import '../Formulario/form.css'


export function FormularioPost() {

const {setMaterial,material,setDeposito,deposito,setQtd,qtd,setTipo,tipo,setdate,date,mutation,objApi} = usePost();

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
