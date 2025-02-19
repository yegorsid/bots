import coin from '../assets/coin.png'
import data from '../vendor/data.min.json'

function Balance() {
  const balance: string = new Intl.NumberFormat('fr-FR').format(data.balance);
  const onHold: string = new Intl.NumberFormat('fr-FR').format(data.on_hold);
  
  return (
    <div className='balance'>
      <div>
        <h2 className='balance__title'>Trading Capital</h2>
        <p className='balance__btc'>{`${data.trading_capital} ${data.trading_capital_currency}`}</p>
      </div>
      <div className='balance__right-column'>
        <h2 className='balance__title'>Balance: <span className='balance__number'>{balance}</span><img className='balance__icon' src={coin} alt="coin" /></h2>
        <h2 className='balance__title'>On hold: <span className='balance__number'>{onHold}</span><img className='balance__icon' src={coin} alt="coin" /></h2>
      </div>
    </div>
  )
}

export default Balance