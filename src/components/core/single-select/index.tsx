import styles from './index.module.css';
import classNames from 'classnames';
import Select, {
  components,
  GroupBase,
  OptionProps,
  SingleValueProps,
  StylesConfig,
} from 'react-select';
import { useMemo } from 'react';

const SingleSelectOptionComponent = (props: OptionProps<SingleSelectValue>) => {
  return (
    <components.Option {...props}>
      <div
        className={classNames(styles.option, {
          [styles.option_selected]: props.isSelected,
        })}
      >
        {props.data.icon && (
          <img className={styles.option_icon} src={props.data.icon} alt='' />
        )}
        <span className={styles.option_label}>{props.data.label}</span>
      </div>
    </components.Option>
  );
};

const SingleSelectValueComponent = (
  props: SingleValueProps<SingleSelectValue>
) => {
  return (
    <components.SingleValue {...props}>
      <div className={styles.value}>
        {props.data.icon && (
          <img className={styles.value_icon} src={props.data.icon} alt='' />
        )}
        <span className={styles.value_label}>{props.data.label}</span>
      </div>
    </components.SingleValue>
  );
};

export type SingleSelectValue = {
  label: string;
  value: string;
  icon?: string;
};

type SingleSelectProps = {
  className?: string;
  placeholderText?: string;
  noOptionsText?: string;
  options?: SingleSelectValue[];
  value?: SingleSelectValue | null;
  isSearchable?: boolean;
  onChange?: (newVal?: SingleSelectValue | null | undefined) => void;
};

const SingleSelect = (props: SingleSelectProps) => {
  const styles: StylesConfig<
    SingleSelectValue,
    false,
    GroupBase<SingleSelectValue>
  > = useMemo(
    () => ({
      control: (provided) => ({
        ...provided,
        background: 'rgb(var(--color-neutral-200))',
        color: 'rgb(var(--color-black))',
        border: 'none',
        borderRadius: '6px',
        boxShadow: 'none',
        height: '42px',
        '&:hover': {},
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
      }),
      indicatorsContainer: (provided) => ({
        ...provided,
        paddingRight: '8px',
      }),
      input: (provided) => ({
        ...provided,
        color: 'rgb(var(--color-black))',
        overflow: 'hidden',
      }),
      placeholder: (provided) => ({
        ...provided,
        color: 'rgb(var(--color-neutral-400))',
        paddingLeft: '8px',
        marginLeft: '0',
      }),
      menu: (provided) => ({
        ...provided,
        background: 'rgb(var(--color-white))',
        color: 'rgb(var(--color-black))',
        border: 'none',
        borderRadius: '6px',
        zIndex: '100',
      }),
      menuList: (provided) => ({
        ...provided,
        '::-webkit-scrollbar': {
          width: 'var(--scroll-width)',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'var(--color-scroll-thumb)',
        },
        scrollbarColor: 'dark',
        scrollbarWidth: 'thin',
      }),
      option: () => ({}),
      dropdownIndicator: (provided) => ({
        ...provided,
        color: 'rgb(var(--color-neutral-400))',
        cursor: 'pointer',
        '&:hover': { color: 'rgb(var(--color-black))' },
      }),
    }),
    []
  );

  return (
    <Select
      className={`w-full ${props.className ?? ''}`}
      styles={styles}
      placeholder={props.placeholderText}
      noOptionsMessage={
        props.noOptionsText ? () => props.noOptionsText : undefined
      }
      options={props.options}
      value={props.value ?? null}
      onChange={(newVal) => props.onChange?.(newVal)}
      components={{
        Option: SingleSelectOptionComponent,
        SingleValue: SingleSelectValueComponent,
      }}
      isSearchable={props.isSearchable ?? false}
      isClearable={false}
    />
  );
};

export default SingleSelect;
