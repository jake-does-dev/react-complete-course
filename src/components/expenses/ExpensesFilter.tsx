import './ExpensesFilter.css';
import Card from '../ui/Card';
import { ChangeEvent } from 'react';

interface ExpensesFilterProps {
  selectedYear: number;
  onYearChange: (selectedYear: number) => void;
}

const ExpensesFilter = ({
  selectedYear,
  onYearChange,
}: ExpensesFilterProps) => {
  const yearChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onYearChange(parseInt(e.target.value));
  };

  return (
    <Card className={'expenses-filter'}>
      <div className={'expenses-filter__control'}>
        <label className={'expenses-filter'} htmlFor='expenses-filter-select'>
          Filter by year
        </label>
        <select
          onChange={yearChangeHandler}
          defaultValue={selectedYear}
          className={'expenses-filter'}
          name='expenses-filter'
          id='expenses-filter-select'
        >
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpensesFilter;
