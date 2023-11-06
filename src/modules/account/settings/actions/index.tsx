import styles from './index.module.css';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useIntl } from 'react-intl';
import { BsFillClipboard2Fill, BsFillPersonPlusFill } from 'react-icons/bs';
import { MdReviews } from 'react-icons/md';
import { RiSettings5Fill } from 'react-icons/ri';

const UserActionsSection = () => {
  const intl = useIntl();
  return (
    <nav className={styles.action_container} id='mainNav'>
      <a className={styles.action_item} href='#1'>
        <BiSolidUserCircle />
        <div>
          {intl.formatMessage({
            id: 'user.settings.actions_item.profile',
            defaultMessage: 'My profile',
          })}
        </div>
      </a>
      <a className={styles.action_item} href='#2'>
        <BsFillClipboard2Fill />
        <div>
          {intl.formatMessage({
            id: 'user.settings.actions_item.personal_info',
            defaultMessage: 'Personal info',
          })}
        </div>
      </a>
      <a className={styles.action_item} href='#3'>
        <MdReviews />
        <div>
          {intl.formatMessage({
            id: 'user.settings.actions_item.feedback',
            defaultMessage: 'Feedback from Experts',
          })}
        </div>
      </a>
      <a className={styles.action_item} href='#4'>
        <BsFillPersonPlusFill />
        <div>
          {intl.formatMessage({
            id: 'user.settings.actions_item.linked_social',
            defaultMessage: 'Linked social networks',
          })}
        </div>
      </a>
      <a className={styles.action_item} href='#5'>
        <RiSettings5Fill />
        <div>
          {intl.formatMessage({
            id: 'user.settings.actions_item.linked_social',
            defaultMessage: 'Actions with profile',
          })}
        </div>
      </a>
    </nav>
  );
};

export default UserActionsSection;
