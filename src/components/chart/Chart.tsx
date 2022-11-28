import './Chart.css';
import ChartBar from './ChartBar';

interface ChartDataPoint {
  value: number;
  label: string;
}

interface ChartProps {
  dataPoints: ChartDataPoint[];
}

const Chart = ({ dataPoints }: ChartProps) => {
  const maxPerPoint = dataPoints.map((d) => d.value);
  const maximum = Math.max(...maxPerPoint);

  return (
    <div className={'chart'}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maximum}
        />
      ))}
    </div>
  );
};

export default Chart;
