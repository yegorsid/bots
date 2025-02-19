import orange from '../assets/orange-bot.png'
import placeholder from '../assets/unknown-bot.png'
import green from '../assets/green_bot.png'
import blue from '../assets/blue-bot.png'
import yellow from '../assets/yellow-bot.png'
import red from '../assets/red-bot.png'
import { State, useShallowStore } from '../store/store'
import data from '../vendor/data.min.json'

type ButtonConfig = {
  name: string,
  isPlaceholder?: boolean,
  image: string,
  action: string
}

const selector = (state: State) => ({
  selectedBot: state.selectedBot,
  timeRange: state.selectedTimeRange,
  setBot: state.setBot
});

const buttonsConfig: ButtonConfig[] = [
  { name: 'orange', image: orange, action: 'Attack' },
  { name: 'placeholder', isPlaceholder: true, image: placeholder, action: 'Place bot here' },
  { name: 'blue', image: blue, action: 'Balance' },
  { name: 'green', image: green, action: 'Defense' },
  { name: 'yellow', image: yellow, action: 'MegaBot' },
  { name: 'red', image: red, action: 'Attack' },
];

function Bots() {
  const { selectedBot, timeRange, setBot } = useShallowStore(selector);
  const getBotData = (botColor: string) => {
    const botData = data.bots.find((bot) => bot.name === `${botColor}_bot`);

    return botData?.[timeRange] ?? (console.error(`Bot ${botColor} not found`), 0);
  };

  return (
    <div className="bots">
      {buttonsConfig.map((config, index) => {
        if (config.isPlaceholder) {
          return (
            <button key={index} className="bots__button" disabled>
              <img className="bots__image" src={config.image} alt={config.name} />
              <p className="bots__sign bots__sign_add">{config.action}</p>
            </button>
          );
        }

        const botData = getBotData(config.name);
        const isPositive = botData > 0;
        const isSelected = config.name === selectedBot
        
        return (
          <button key={index} className={`bots__button ${isSelected ? 'bots__button_selected' : ''}`} onClick={() => setBot(config.name)}>
            <img className="bots__image" src={config.image} alt={config.name} />
            <p className="bots__sign bots__sign_action">{config.action}</p>
            <p className={`bots__sign ${isPositive ? 'bots__sign_positive' : 'bots__sign_negative'}`}>
              {`${isPositive ? '+' : '-'}${Math.abs(botData)}%`}
            </p>
          </button>
        );
      })}
    </div>
  )
}

export default Bots