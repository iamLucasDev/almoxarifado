
import './App.css'
import { TabelaDeposito } from './componentes/Deposito'
import { TabelaMaterial } from './componentes/Material'
import {Movimentacoes} from './componentes/Movimentacoes'

function App() {
  return (
    <main>
      <header>
        <h1 className="titulo">Sistema almoxarifado</h1>
      </header>

      <div className="Container">
        <section>
          <TabelaDeposito />
        </section>

        <section>
          <TabelaMaterial />
        </section>

        <section>
          <Movimentacoes />
        </section>
      </div>
    </main>
  )
}

export default App
