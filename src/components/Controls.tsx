import '../styles/Controls.css'

function Controls() {
  return (
    <div className='controls'>
      <p className='controls__title'>Time Range:</p>
      <div className='controls__buttons-container'>
        <button className='controls__button'>24h</button>
        <button className='controls__button'>7 days</button>
        <button className='controls__button'>30 days</button>
        <button className='controls__button controls__button_selected'>All Time</button>
      </div>
    </div>
  )
}

export default Controls