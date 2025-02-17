import '../styles/Menu.css'
import dashboard from '../assets/dashboard.png'
import megabot from '../assets/megabot.png'
import market from '../assets/market.png'
import prices from '../assets/coin-prices.png'
import profile from '../assets/profile.png'

function Menu() {
  return (
    <menu className='menu'>
        <button className='menu__button menu__button_selected'>
          <img src={dashboard} alt="dashboard" />
          <p className='menu__text'>Dashboard</p>
        </button>
        <button className='menu__button'>
          <img src={megabot} alt="megabot" />
          <p className='menu__text'>Megabot</p>
        </button>
        <button className='menu__button'>
          <img src={market} alt="market" />
          <p className='menu__text'>Bot Market</p>
        </button>
        <button className='menu__button'>
          <img src={prices} alt="prices" />
          <p className='menu__text'>Coin Prices</p>
        </button>
        <button className='menu__button'>
          <div className='menu__notifications'>3</div>
          <img src={profile} alt="profile" />
          <p className='menu__text'>Profile</p>
        </button>
    </menu>
  )
}

export default Menu