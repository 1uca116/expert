import classNames from 'classnames';
import styles from './index.module.css';
import DatePicker from 'react-datepicker';
import { useCallback } from 'react';
import { BsCalendar } from 'react-icons/bs';

type Props = {
  maxDate?: Date;
  minDate?: Date;
  placeholder?: string;
  disabled?: boolean;
  value?: Date | undefined | null;
  error?: string;
  onChange?: (date: Date | undefined | null) => void;
};

const DateTimePicker = (props: Props) => {
  const handleDateChange = useCallback(
    (date: Date | null) => {
      props.onChange?.(date);
    },
    [props]
  );

  const timeFilter = useCallback(
    (time: Date) => {
      const minDate = props.minDate;

      if (!minDate) {
        return true;
      }

      return minDate.getTime() < time.getTime();
    },
    [props.minDate]
  );

  return (
    <div className={styles.main}>
      <div
        className={classNames(
          styles.picker_container,
          'react-datepicker__input-container-main'
        )}
      >
        <DatePicker
          className={classNames('react-datepicker-input', {
            'react-datepicker_disabled': props.disabled,
          })}
          selected={props.value}
          onChange={handleDateChange}
          maxDate={props.maxDate}
          minDate={props.minDate}
          filterTime={timeFilter}
          dateFormat={'dd.MM.yyyy'}
          placeholderText={props.placeholder || 'Select'}
          disabled={props.disabled}
          autoComplete='off'
          isClearable={false}
          showYearDropdown={false}
          scrollableYearDropdown={true}
          showTimeSelect={false}
          popperModifiers={[
            {
              name: 'arrow',
              options: { padding: 24 },
            },
          ]}
        />
        <BsCalendar className='react-datepicker__calendar' />
      </div>

      {props.error && <span className={styles.error}>{props.error}</span>}
    </div>
  );
};

export default DateTimePicker;
