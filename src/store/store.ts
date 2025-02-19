import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useShallow } from 'zustand/react/shallow';
import { getRandomNumber } from '../utils/getRandomNumber';

export enum TimeRange {
  Day = '24h',
  SevenDays = '7d',
  ThirtyDays = '30d',
  AllTime = 'all_time'
}

export type State = {
  selectedBot: string | undefined,
  selectedTimeRange: TimeRange,
  chartData: ChartChunkType[],
  setTimeRange: (timeRange: TimeRange) => void,
  setBot: (selectedBot: string) => void
}

type ChartChunkType = {
  name: string,
  value: number
}

const generateBotData = (timeRange: TimeRange) => {
  const chartData: ChartChunkType[] = [];
  if (timeRange !== TimeRange.Day) {
    const iterations = timeRange === TimeRange.SevenDays ? 7 : 30;
    for (let i = iterations; i >= 0; i--) {
      const date = new Date(Date.now() - i * 24 * 3600 * 1000);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const data = {
        "name": `${day}.${month}`,
        "value": getRandomNumber()
      }

      chartData.push(data)
    }
  } else {
    for (let i = 24; i >= 0; i--) {
      const date = new Date(Date.now() - i * 3600 * 1000);
      const hour = date.getHours().toString().padStart(2, '0');
      const data = {
        "name": `${hour}:00`,
        "value": getRandomNumber()
      }

      chartData.push(data)
    }
  }

  return chartData
}

const useStore = create<State>() (
  persist(
    (set, get) => {
      const state: State = {
        selectedBot: undefined,
        selectedTimeRange: TimeRange.SevenDays,
        chartData: generateBotData(TimeRange.SevenDays),
        setTimeRange: (selectedTimeRange: TimeRange) => {
          const chartData = generateBotData(selectedTimeRange);
          set({selectedTimeRange, chartData})
        },
        setBot: (selectedBot: string) => {
          const selectedTimeRange = get().selectedTimeRange;
          const chartData = generateBotData(selectedTimeRange);
          set({selectedBot, chartData})
        }
      }

      return state
    },
    {
      name: 'bot-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export const useShallowStore = <U>(selector: (state: State) => U) => useStore(useShallow(selector));

export default useStore;