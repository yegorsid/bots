import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, TooltipProps, XAxis } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { State, useShallowStore } from "../store/store";

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p className="chart__tooltip-label">{`+${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

const selector = (state: State) => ({
  chartData: state.chartData
});

function Chart() {
  const { chartData } = useShallowStore(selector);

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" >
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0076d1" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0076d1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" strokeOpacity={0.3} />
          <XAxis dataKey="name" axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="value" stroke="#0076d1" fill="url(#areaColor)" fillOpacity={1} strokeWidth={2}/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart