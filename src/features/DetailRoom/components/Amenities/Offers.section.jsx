import classNames from 'classnames/bind';

import {
  BalconyIcon,
  CarbonBannedIcon,
  CarIcon,
  FlowerIcon,
  KnifeIcon,
  PoolIcon,
  SmokeBannedIcon,
  SnowFlowerIcon,
  WifiIcon,
  WorkspaceIcon,
} from '@/assets/svgs';
import Button from '@/components/Button';

import styles from './Amenities.module.scss';

const cx = classNames.bind(styles);

const Offers = () => {
  const offers = [
    {
      icon: <KnifeIcon />,
      description: 'Kitchen',
    },
    {
      icon: <WifiIcon />,
      description: 'Wifi',
    },
    {
      icon: <WorkspaceIcon />,
      description: 'Dedicated workspace',
    },
    {
      icon: <CarIcon />,
      description: 'Free parking on premises',
    },
    {
      icon: <PoolIcon />,
      description: 'Private pool',
    },
    {
      icon: <SnowFlowerIcon />,
      description: 'Air conditioning',
    },
    {
      icon: <BalconyIcon />,
      description: 'Private patio or balcony',
    },
    {
      icon: <FlowerIcon />,
      description: 'Backyard',
    },
    {
      icon: <CarbonBannedIcon />,
      description: 'Carbon monoxide alarm',
    },
    {
      icon: <SmokeBannedIcon />,
      description: 'Smoke alarm',
    },
  ];
  return (
    <div className={cx('section', 'homestay-offers')} id='offer'>
      <h1 className={cx('tittle')}>What this place offers</h1>
      <div className={cx('offer-list', 'container-fluid')}>
        <div className={cx('offer-box', 'row')}>
          {offers &&
            offers.map((offer, index) => (
              <div
                key={index}
                className={cx('offer-item', 'col', 'col-lg-6', 'pb-4')}
              >
                {offer.icon}
                <span className={cx('offer-description')}>
                  {offer.description}
                </span>
              </div>
            ))}
        </div>
      </div>
      <Button className={cx('show-btn')} isRound={true} scaleOnClick={true}>
        Show all {offers.length} amenities
      </Button>
    </div>
  );
};

export default Offers;
