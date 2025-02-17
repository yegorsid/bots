import '../styles/Bots.css'
import orange from '../assets/orange-bot.png'
import unknown from '../assets/unknown-bot.png'
import green from '../assets/green_bot.png'
import blue from '../assets/blue-bot.png'
import yellow from '../assets/yellow-bot.png'
import red from '../assets/red-bot.png'

function Bots() {
  return (
    <div className="bots">
      <button className='bots__button'>
        <img src={orange} alt="ornage" />
        <p className='bots__sign bots__sign_action'>Attack</p>
        <p className='bots__sign bots__sign_negative'>-8.2%</p>
      </button>
      <button className='bots__button'>
        <img src={unknown} alt="unknown" />
        <p className='bots__sign bots__sign_add'>Place bot here</p>
      </button>
      <button className='bots__button'>
        <img src={blue} alt="blue" />
        <p className='bots__sign bots__sign_action'>Balance</p>
        <p className='bots__sign bots__sign_negative'>-3.7%</p>
      </button>
      <button className='bots__button'>
        <img src={green} alt="green" />
        <p className='bots__sign bots__sign_action'>Defense</p>
        <p className='bots__sign bots__sign_positive'>+2.5%</p>
      </button>
      <button className='bots__button'>
        <img src={yellow} alt="yellow" />
        <p className='bots__sign bots__sign_action'>MegaBot</p>
        <p className='bots__sign bots__sign_positive'>+3.6%</p>
      </button>
      <button className='bots__button'>
        <img src={red} alt="red" />
        <p className='bots__sign bots__sign_action'>Attack</p>
        <p className='bots__sign bots__sign_positive'>+13.7%</p>
      </button>
    </div>
  )
}

export default Bots