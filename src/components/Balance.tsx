import coin from '../assets/coin.png'

function Balance() {
  return (
    <div className='balance'>
      <div>
        <h2 className='balance__title'>Trading Capital</h2>
        <p className='balance__btc'>1.000865 BTC</p>
      </div>
      <div className='balance__right-column'>
        <h2 className='balance__title'>Balance: <span className='balance__number'>10 850</span><img className='balance__icon' src={coin} alt="coin" /></h2>
        <h2 className='balance__title'>On hold: <span className='balance__number'>24 000</span><img className='balance__icon' src={coin} alt="coin" /></h2>
      </div>
    </div>
  )
}

export default Balance