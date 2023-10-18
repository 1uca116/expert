import styles from './index.module.css';
import { useIntl } from 'react-intl';
import SearchField from 'components/common/search-field';
import Button from 'components/core/button';
import { Test } from '../../../utils/mock';

const SearchSection = () => {
  const intl = useIntl();
  return (
    <div>
      <h1 className={styles.title}>
        {intl.formatMessage({
          id: 'expert.main.search-section.title_part1',
          defaultMessage: 'Everything is easier with ',
        })}
        <span className={styles.title_accent}>expert</span>
      </h1>
      <div className={styles.search_section}>
        <div className={styles.search_field}>
          <SearchField />
        </div>
        <Button variant={'primary'} className={styles.search_btn}>
          Search
        </Button>
      </div>
      <div className={styles.suggestion_section}>
        {Test?.map(
          (x) =>
            x.profession && (
              <div className={styles.suggestion}>{x.profession}</div>
            )
        )}
      </div>
    </div>
  );
};

export default SearchSection;
