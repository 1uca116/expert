import styles from './index.module.css';
import { useIntl } from 'react-intl';

const SearchSection = () => {
  const intl = useIntl();
  return (
    <div>
      <h1 className={styles.title}>
        {intl.formatMessage({
          id: 'expert.main.search-section.title_part',
          defaultMessage: 'Everything is easier with expert',
        })}
      </h1>
    </div>
  );
};

export default SearchSection;
