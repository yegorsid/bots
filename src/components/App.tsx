import Balance from './Balance'
import Bots from './Bots'
import Chart from './Chart'
import Controls from './Controls'
import Header from './Header'
import Menu from './Menu'

function App() {

  return (
    <div className='app'>
      <Header />
      <Balance />
      <Chart />
      <Bots />
      <Controls />
      <Menu />
    </div>
  )
}

export default App
