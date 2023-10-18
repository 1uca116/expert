import styles from './index.module.css';
import AsyncSelect from 'react-select/async';
import { observer, useLocalObservable } from 'mobx-react-lite';
import {
  components,
  ControlProps,
  GroupBase,
  OptionProps,
  StylesConfig,
} from 'react-select';
import React, { useCallback, useState } from 'react';
import { SearchFieldValue, SearchStore } from 'stores/SearchStore';
import { useApi } from 'providers/BaseStoresProvider';
import { useIntl } from 'react-intl';
import { Test } from 'utils/mock';
import Link from 'next/link';

const SearchFieldControl = (props: ControlProps<SearchFieldValue>) => {
  return (
    <components.Control {...props}>
      <div className={styles.search_control}>{props.children}</div>
    </components.Control>
  );
};

const SearchFieldOption = (props: OptionProps<SearchFieldValue>) => {
  return (
    <Link href={props.data.slug}>
      <components.Option {...props}>
        <div className={styles.search_option}>
          <div className={styles.info_container}>
            {props.data.objectType === 'name' && (
              <span className={styles.title}>{props.data.name}</span>
            )}
            {props.data.objectType === 'profession' && (
              <span className={styles.collection}>{props.data.profession}</span>
            )}
            {props.data.objectType === 'task' && <div>{props.data.task}</div>}
          </div>
        </div>
      </components.Option>
    </Link>
  );
};

const searchFieldStyles: StylesConfig<
  SearchFieldValue,
  boolean,
  GroupBase<SearchFieldValue>
> = {
  control: (provided) => ({
    ...provided,
    background: 'rgb(var(--color-white))',
    color: 'rgb(var(--color-black))',
    border: '1px solid transparent',
    borderRadius: '6px',
    boxShadow: 'none',
    fontSize: '16px',
    cursor: 'text',
    padding: '4px 0 ',
    '&:hover': {
      opacity: '0.8',
    },
  }),
  input: (provided) => ({
    ...provided,
    color: 'rgb(var(--color-black))',
    overflow: 'hidden',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'rgb(var(--color-slate-200))',
    fontSize: '16px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  indicatorsContainer: () => ({ display: 'none' }),
  menu: (provided) => ({
    ...provided,
    background: 'rgb(var(--color-white))',
    color: 'rgb(var(--color-black))',
    border: '1px solid transparent',
    borderRadius: '6px',
    boxShadow: 'var(--box-shadow-secondary)',
    overflow: 'hidden',
    zIndex: '100',
    padding: '4px',
  }),
  menuList: (provided) => ({
    ...provided,
    '::-webkit-scrollbar': {
      width: '4px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgb(var(--color-gray-400))',
      width: '2px',
      borderRadius: '2px',
      backgroundClip: 'padding-box',
      borderRight: '2px solid transparent',
    },
  }),
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    color: 'rgb(var(--color-black))',
    cursor: 'pointer',
    borderRadius: '6px',
    background:
      (isSelected ? 'rgb(var(--color-stone))' : '') ||
      (isFocused ? 'rgb(var(--color-stone))' : ''),
    ':active': {
      backgroundColor: 'rgb(var(--color-stone))',
    },
  }),
};

const MIN_SYMBOLS = 2;

const SearchField = observer(() => {
  const api = useApi();
  const intl = useIntl();
  const store = useLocalObservable(() => new SearchStore(api));

  const [showMenu, setShowMenu] = useState(false);

  const searchValues = useCallback(
    (inputValue: string, callback: (options: SearchFieldValue[]) => void) => {
      if (!inputValue || inputValue.length < MIN_SYMBOLS) {
        // TODO: change to 'callback([])'
        callback(Test);
        return;
      }

      store.search(inputValue, callback);
    },
    [store]
  );

  const onInputValueChange = useCallback((val: string) => {
    setShowMenu(!!val);
  }, []);

  return (
    <AsyncSelect
      className={styles.select}
      placeholder={intl.formatMessage({
        id: 'navbar.search.placeholder',
        defaultMessage: 'Task or specialist',
      })}
      noOptionsMessage={() =>
        intl.formatMessage({
          id: 'navbar.search.no_results',
          defaultMessage: 'No results found',
        })
      }
      loadingMessage={() =>
        intl.formatMessage({
          id: 'navbar.search.loading',
          defaultMessage: 'Searching...',
        })
      }
      loadOptions={searchValues}
      components={{
        Control: SearchFieldControl,
        Option: SearchFieldOption,
      }}
      value={null}
      onInputChange={onInputValueChange}
      menuIsOpen={showMenu}
      styles={searchFieldStyles}
    />
  );
});

export default SearchField;
