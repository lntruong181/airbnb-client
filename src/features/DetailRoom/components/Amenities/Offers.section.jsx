import classNames from 'classnames/bind';

import {
  BalconyIcon,
  CancelIcon,
  CarbonBannedIcon,
  CarIcon,
  FlowerIcon,
  HairDryerIcon,
  KnifeIcon,
  PoolIcon,
  ShampooIcon,
  SmokeBannedIcon,
  SnowFlowerIcon,
  WaterIcon,
  WifiIcon,
  WorkspaceIcon,
  DoorOpenIcon,
  CalendarIcon,
} from '@/assets/svgs';
import Button from '@/components/Button';
import useModal from '@/hooks/useModal';

import styles from './Amenities.module.scss';
import Modal from '@/components/Modal';

const cx = classNames.bind(styles);

const Offers = () => {
  const { isShowing, toggle } = useModal();
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

  const moreOffers = [
    {
      tittle: 'Bathroom',
      items: [
        {
          icon: <HairDryerIcon />,
          description: 'Hair dryer',
        },
        {
          icon: <ShampooIcon />,
          description: 'Shampoo',
        },
        {
          icon: <WaterIcon />,
          description: 'Hot water',
        },
      ],
    },
    {
      tittle: 'Bedroom and laundry',
      items: [
        {
          icon: <HairDryerIcon />,
          description: 'Washer',
        },
        {
          icon: <ShampooIcon />,
          description: 'Dryer',
        },
        {
          icon: <WaterIcon />,
          description: 'Essentials',
          detail: 'Towels, bed sheets, soap, and toilet paper',
        },
        {
          icon: <ShampooIcon />,
          description: 'Hangers',
        },
        {
          icon: <ShampooIcon />,
          description: 'Iron',
        },
      ],
    },
    {
      tittle: 'Entertainment',
      items: [
        {
          icon: <KnifeIcon />,
          description: 'TV',
        },
      ],
    },
    {
      tittle: 'Family',
      items: [
        {
          icon: <KnifeIcon />,
          description: 'Crib',
        },
        {
          icon: <WorkspaceIcon />,
          description: 'Pack ’n play/Travel crib',
        },
        {
          icon: <DoorOpenIcon />,
          description: 'Children’s books and toys',
        },
        {
          icon: <CalendarIcon />,
          description: 'High chair',
        },
      ],
    },
  ];

  return (
    <div className={cx('section', 'homestay-offers')}>
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
      <Button
        className={cx('show-btn')}
        isRound={true}
        scaleOnClick={true}
        onClick={toggle}
      >
        Show all {offers.length} amenities
      </Button>
      <Modal isOpen={isShowing} onClose={toggle} type={'small'}>
        <div className={cx('more-offer')}>
          <div className={cx('close-icon')}>
            <CancelIcon />
          </div>
          <div className={cx('more-offer-section')}>
            <h2 className={cx('more-offer-tittle')}>What this place offers</h2>
            {moreOffers &&
              moreOffers.map((offers) => (
                <div>
                  <h3 className={cx('more-offer-heading')}>{offers.tittle}</h3>
                  <ul className={cx('more-offers')}>
                    {offers.items.map((offer) => (
                      <li className={cx('more-offer-item')}>
                        {offer.icon}{' '}
                        <div className={cx('more-offer-description')}>
                          {offer.description}{' '}
                          <span className={cx('more-offer-detail')}>
                            {offer?.detail}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Offers;
