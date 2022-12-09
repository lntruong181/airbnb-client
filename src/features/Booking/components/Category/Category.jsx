import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames/bind';

import images from '@/assets/Images';
import Image from '@/components/Image';
import Icon from '@/components/Icon';

import styles from './Category.module.scss';
import { FilterIcon, RightArrowIcon } from '@/assets/svgs';

const cx = classNames.bind(styles);

const RadioItem = ({ data, isSelected, setSelected }) => {
  const handleClick = () => {
    setSelected(data.id);
  };
  const activeClassName = isSelected ? 'active' : 'non-active';
  return (
    <li onClick={handleClick} className={cx('radio-item', activeClassName)}>
      <span className={cx('radio-icon')}>
        <Image
          className={cx('radio-image')}
          src={data.icon}
          alt='activity-icon'
        />
      </span>
      <span className={cx('radio-text')}>{data.text}</span>
    </li>
  );
};

const items = [
  {
    id: uuid(),
    icon: images.keyIcon,
    text: 'New',
  },
  {
    id: uuid(),
    icon: images.mountainIcon,
    text: 'Top of the world',
  },
  {
    id: uuid(),
    icon: images.fireIcon,
    text: 'Trending',
  },
  {
    id: uuid(),
    icon: images.adaptedIcon,
    text: 'Adapted',
  },
  {
    id: uuid(),
    icon: images.bowlingIcon,
    text: 'Play',
  },
  {
    id: uuid(),
    icon: images.mountainIcon,
    text: 'Farms',
  },
  {
    id: uuid(),
    icon: images.pangodaIcon,
    text: 'Hanoks',
  },
  {
    id: uuid(),
    icon: images.roomIcon,
    text: 'Private rooms',
  },
  {
    id: uuid(),
    icon: images.keyIcon,
    text: 'Amazing Views',
  },
  {
    id: uuid(),
    icon: images.fireIcon,
    text: 'Design',
  },
  {
    id: uuid(),
    icon: images.pangodaIcon,
    text: 'Trending',
  },
  {
    id: uuid(),
    icon: images.bowlingIcon,
    text: 'Adapted',
  },
  {
    id: uuid(),
    icon: images.roomIcon,
    text: 'Play',
  },
  {
    id: uuid(),
    icon: images.mountainIcon,
    text: 'Farms',
  },
  {
    id: uuid(),
    icon: images.windowIcon,
    text: 'Hanoks',
  },
  {
    id: uuid(),
    icon: images.adaptedIcon,
    text: 'Private rooms',
  },
  {
    id: uuid(),
    icon: images.keyIcon,
    text: 'New',
  },
  {
    id: uuid(),
    icon: images.fireIcon,
    text: 'Top of the world',
  },

  {
    id: uuid(),
    icon: images.fireIcon,
    text: 'Trending',
  },
  {
    id: uuid(),
    icon: images.adaptedIcon,
    text: 'Adapted',
  },
  {
    id: uuid(),
    icon: images.bowlingIcon,
    text: 'Play',
  },
  {
    id: uuid(),
    icon: images.mountainIcon,
    text: 'Farms',
  },
  {
    id: uuid(),
    icon: images.pangodaIcon,
    text: 'Hanoks',
  },
  {
    id: uuid(),
    icon: images.roomIcon,
    text: 'Private rooms',
  },
  {
    id: uuid(),
    icon: images.keyIcon,
    text: 'Amazing Views',
  },
  {
    id: uuid(),
    icon: images.fireIcon,
    text: 'Design',
  },
  {
    id: uuid(),
    icon: images.pangodaIcon,
    text: 'Trending',
  },
  {
    id: uuid(),
    icon: images.bowlingIcon,
    text: 'Adapted',
  },
  {
    id: uuid(),
    icon: images.roomIcon,
    text: 'Play',
  },
  {
    id: uuid(),
    icon: images.mountainIcon,
    text: 'Farms',
  },
  {
    id: uuid(),
    icon: images.windowIcon,
    text: 'Hanoks',
  },
  {
    id: uuid(),
    icon: images.adaptedIcon,
    text: 'Private rooms',
  },
  {
    id: uuid(),
    icon: images.keyIcon,
    text: 'New',
  },
  {
    id: uuid(),
    icon: images.fireIcon,
    text: 'Top of the world',
  },
  {
    id: uuid(),
    icon: images.keyIcon,
    text: 'New',
  },
];

const Category = () => {
  const [selected, setSelected] = useState(items[0].id);

  return (
    <div className={cx('container')}>
      <ul className={cx('radio-list')}>
        {items.map((item) => (
          <RadioItem
            key={item.id}
            setSelected={setSelected}
            isSelected={selected === item.id}
            data={item}
          />
        ))}
      </ul>
      <div>
        <Icon className={cx('next')} isRound={true} scaleOnHover={true}>
          <RightArrowIcon />
        </Icon>
      </div>
      <button className={cx('filter')}>
        <span className={cx('filter-icon')}>
          <FilterIcon />
        </span>
        <span className={cx('filter-text')}>Filters</span>
      </button>
    </div>
  );
};
export default Category;
