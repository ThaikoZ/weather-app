interface CustomTooltipProps {
  active?: boolean;
  label?: string;
  payload?: [
    {
      payload: {
        rain: number;
        temp: number;
      };
    }
  ];
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Temperature:
          <span className="ml-2">{data.temp}°C</span>
        </p>
        <p className="text-sm text-indigo-400">
          Rain:
          <span className="ml-2">{data.rain}%</span>
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
