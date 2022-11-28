import './ChartBar.css';

interface ChartBarProps {
  label: string;
  value: number;
  maxValue: number;
}

const ChartBar = ({ label, maxValue, value }: ChartBarProps) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
    console.log(barFillHeight);
  }

  return (
    <div className={'chart-bar'}>
      <div className={'chart-bar__label'}>{label}</div>
      <div className={'chart-bar__inner'}>
        <div
          className={'chart-bar__fill'}
          style={{ height: barFillHeight }}
        ></div>
      </div>
    </div>
  );
};

export default ChartBar;
