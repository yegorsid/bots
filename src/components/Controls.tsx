import { State, TimeRange, useShallowStore } from "../store/store";

const selector = (state: State) => ({
  timeRange: state.selectedTimeRange,
  setTimeRange: state.setTimeRange
});

function Controls() {
  const { timeRange, setTimeRange } = useShallowStore(selector);

  const timeRanges = [
    { value: TimeRange.Day, label: '24h' },
    { value: TimeRange.SevenDays, label: '7 days' },
    { value: TimeRange.ThirtyDays, label: '30 days' },
    { value: TimeRange.AllTime, label: 'All Time' },
  ];

  return (
    <div className='controls'>
      <p className='controls__title'>Time Range:</p>
      <div className='controls__buttons-container'>
        {timeRanges.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setTimeRange(value)}
            className={`controls__button ${timeRange === value ? 'controls__button_selected' : ''}`}>
              {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Controls