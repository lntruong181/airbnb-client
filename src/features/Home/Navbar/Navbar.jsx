import images from '@/assets/Images';
import { FilterIcon, KeyIcon, RightArrowIcon } from '@/enum/icon.enum';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const RadioItem = ({ icon, text }) => {
  return (
    <li className={cx('radio-item')}>
      <span className={cx('radio-item-icon')}>{icon}</span>
      <span className={cx('radio-item-text')}>{text}</span>
    </li>
  );
};

const items = [
  {
    icon: <KeyIcon />,
    text: 'New',
  },
  {
    icon: <KeyIcon />,
    text: 'Top of the world',
  },
  {
    icon: <KeyIcon />,
    text: 'Trending',
  },
  {
    icon: <KeyIcon />,
    text: 'Adapted',
  },
  {
    icon: <KeyIcon />,
    text: 'Play',
  },
  {
    icon: <KeyIcon />,
    text: 'Farms',
  },
  {
    icon: <KeyIcon />,
    text: 'Hanoks',
  },
  {
    icon: <KeyIcon />,
    text: 'Private rooms',
  },
  {
    icon: <KeyIcon />,
    text: 'Farms',
  },
  {
    icon: <KeyIcon />,
    text: 'Riads',
  },
  {
    icon: <KeyIcon />,
    text: 'Tiny homes',
  },
  {
    icon: <KeyIcon />,
    text: 'Cycladic homes',
  },
  {
    icon: <KeyIcon />,
    text: 'Trulli',
  },
  {
    icon: <KeyIcon />,
    text: 'Vineyards',
  },
  {
    icon: <KeyIcon />,
    text: 'Design',
  },
  {
    icon: <KeyIcon />,
    text: 'National parks',
  },
  {
    icon: <KeyIcon />,
    text: 'Creative spaces',
  },
  {
    icon: <KeyIcon />,
    text: 'Off-the-grid',
  },
];
const Navbar = () => {
  return (
    <div className={cx('container')}>
      <ul className={cx('radio-list')}>
        {items.map((item) => (
          <RadioItem icon={item.icon} text={item.text} />
        ))}
      </ul>
      <div>
        <button className={cx('next')}>
          <RightArrowIcon />
        </button>
      </div>
      <button>
        <FilterIcon />
        <span>Filters</span>
      </button>
    </div>
  );
};
export default Navbar;
