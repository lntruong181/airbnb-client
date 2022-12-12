import Calendar from 'react-calendar';

import {
  BalconyIcon,
  BedroomIcon,
  CalendarIcon,
  CarbonBannedIcon,
  CarIcon,
  DoorOpenIcon,
  DownArrowIcon,
  FlowerIcon,
  KnifeIcon,
  LeftLightArrowIcon,
  PoolIcon,
  RightArrowIcon,
  RightLightArrowIcon,
  SmokeBannedIcon,
  SnowFlowerIcon,
  WifiIcon,
  WorkspaceIcon,
} from '@/assets/svgs';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Image from '@/components/Image';
import classNames from 'classnames/bind';

import styles from './Amenities.module.scss';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';
import Wrapper from '@/components/Popper/Wrapper';

const cx = classNames.bind(styles);

const Amenities = () => {
  window.onscroll = function () {
    scrollRotate();
  };

  function scrollRotate() {
    // let image = document.getElementById('circle');
    // image.style.transform = 'rotate(' + window.pageYOffset / 5 + 'deg)';
  }
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
  const highlightAmenities = [
    {
      icon: <WorkspaceIcon />,
      tittle: 'Dedicated workspace',
      description: 'Dedicated workspace',
    },
    {
      icon: <DoorOpenIcon />,
      tittle: 'Self check-in',
      description: 'Check yourself in with the keypad.',
    },
    {
      icon: <CalendarIcon />,
      tittle: 'Check yourself in with the keypad.',
    },
  ];
  return (
    <main className={cx('container')}>
      <div className='container-fluid g-0'>
        <div className='row'>
          <div className='col-sm-7'>
            <div className={cx('section', 'title-container')}>
              <div className={cx('heading')}>
                <h1 className={cx('tittle')}>
                  Private room in townhouse hosted by Bua
                </h1>
                <div className={cx('description')}>
                  <span>3 guests</span>
                  <span>.</span>
                  <span>1 bedroom</span>
                  <span>.</span>
                  <span>1 bed</span>
                  <span>.</span>
                  <span>1 private bathroom</span>
                </div>
              </div>
              <div className={cx('owner-avatar')}>
                <Image
                  src={
                    'https://a0.muscache.com/im/pictures/user/b13b4892-4c96-47c2-8aff-f8691ec2c532.jpg?im_w=240'
                  }
                  alt='avatar'
                />
              </div>
            </div>
            <div className={cx('section', 'highlight-amenities')}>
              {highlightAmenities &&
                highlightAmenities.map((amenity) => (
                  <div className={cx('amenity')}>
                    <span className={cx('amenity-icon')}>{amenity.icon}</span>
                    <h4 className={cx('amenity-description')}>
                      {amenity.tittle}
                      <span>{amenity?.description}</span>
                    </h4>
                  </div>
                ))}
            </div>
            <div className={cx('section', 'homestay-benefit')}>
              <Image
                className={cx('logo')}
                src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'
                alt='homestay-logo'
              />
              <p className={cx('guide')}>
                Every booking includes free protection from Host cancellations,
                listing inaccuracies, and other issues like trouble checking in.
              </p>
              <a className={cx('more')}>Learn more</a>
            </div>
            <div className={cx('section', 'homestay-history')}>
              <div className={cx('history-brief')}>
                <span>
                  <span>
                    MAITRI CHIT ROOM - is a spacious en-suite open plan room
                    located on the 3rd floor of the renovated 40-year old
                    shophouse call "Ba hao". The room is a Thai-contemporary
                    inspired, with a huge glass window overlooking the vibrant
                    "soi nana" near Chinatown. <br />
                    <br />
                    No matter you need natural daylight or a clean sleeping,
                    this room is suitable for you with double layer roll-up
                    curtain, it can be adjusted to suit your mood.
                    <br />
                    <br />
                    Extra bed is available upon request.
                    <br />
                    <br />
                    <span className={cx('highlight')}>The space</span>
                    <br />
                    Bā hào 八號 is a Bangkok-based co-living platform located
                    near china town. Our place is a renovated 40-year old shop
                    house in a vibrant area of Bangkok’s china town consists of;{' '}
                    <br />
                    <br />
                    1st floor is Bā hào 八號 – Oriental-style Bar focusing on
                    beers and Chinese-inspired comfort bar food <br />
                    <br />
                    2nd floor is MITRPHAN – a shared living room equipped with
                    55-inch LCD TV with Netflix, pantry with complimentary
                    coffee, tea, snack, drinking water, soft drinks, toast,
                    spreads and utensils.
                    <br />
                    <br />
                    3rd floor (this room) is MAITRI CHIT room – an en-suite room
                    with magnificent view of Soi Nana <br />
                    <br />
                    4th floor is SANTIPHAP – an en-suite room with private
                    balcony and your own visual portrait of one of the most
                    sacred temple in Bangkok, Trimitr Temple. See here:
                    http://abnb.me/EVmg/PTWaEYd7UC
                    <br /> <br />
                    Bā hào 八號 means “house no. 8” in Chinese language which is
                    obviously our shop house address. Number 8 is considered a
                    lucky number for Chinese people. The main reason has to do
                    with the pronunciation of the word for the number 8 in
                    China. It is pronounced "ba" and sounds like the word for
                    prosperity which is pronounced "fa”.
                  </span>
                </span>
              </div>
              <a href='#' className={cx('more')}>
                Show More{' '}
                <span>
                  <RightArrowIcon />
                </span>
              </a>
            </div>
            <div className={cx('section', 'homestay-bedroom')}>
              <h1 className={cx('tittle')}>Where you'll sleep</h1>
              <div className={cx('bedroom')}>
                <ul className={cx('bedroom-list')}>
                  <Icon className={cx('next')} isRound={true}>
                    <RightArrowIcon />
                  </Icon>
                  <li className={cx('bedroom-card')}>
                    <BedroomIcon />
                    <h3 className={cx('bedroom-heading')}>Bedroom 1</h3>
                    <p className={cx('bedroom-desc')}>1 king bed</p>
                  </li>
                  <li className={cx('bedroom-card')}>
                    <BedroomIcon />
                    <h3 className={cx('bedroom-heading')}>Bedroom 1</h3>
                    <p className={cx('bedroom-desc')}>1 king bed</p>
                  </li>
                  <li className={cx('bedroom-card')}>
                    <BedroomIcon />
                    <h3 className={cx('bedroom-heading')}>Bedroom 1</h3>
                    <p className={cx('bedroom-desc')}>1 king bed</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx('section', 'homestay-offers')}>
              <h1 className={cx('tittle')}>What this place offers</h1>
              <div className={cx('offer-list', 'container-fluid')}>
                <div className={cx('offer-box', 'row')}>
                  {offers &&
                    offers.map((offer) => (
                      <div
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
              >
                Show all {offers.length} amenities
              </Button>
            </div>
            <div className={cx('section', 'check-in')}>
              <h1 className={cx('tittle')}>5 nights in Rockbridge</h1>
              <p className={cx('sub')}>Nov 5, 2023 - Nov 10, 2023</p>
              <Calendar
                showDoubleView={true}
                selectRange={true}
                tileClassName={'tile'}
                className={'calendar'}
                nextLabel={<RightLightArrowIcon />}
                prevLabel={<LeftLightArrowIcon />}
                calendarType='Hebrew'
              ></Calendar>
            </div>
          </div>
          <div className={cx('homestay-checkout', 'col-sm-4')}>
            <Wrapper className={cx('wrapper')}>
              <div className={cx('wrapper-content')}>
                <div className={cx('daily-prices')}>
                  <span className={cx('price')}>
                    <strong className={cx('price-num')}>$2,167</strong> night
                  </span>
                  <button className={cx('review')}>
                    <u>1 review</u>
                  </button>
                </div>
                <div className={cx('detail')}>
                  <button className={cx('time')}>
                    <div className={cx('box', 'check-in')}>
                      <label className={cx('summary-tittle')}>Check-in</label>
                      <p>12/21/2022</p>
                    </div>
                    <div className={cx('box', 'check-out')}>
                      <label className={cx('summary-tittle')}>Checkout</label>
                      <p>12/21/2022</p>
                    </div>
                  </button>
                  <button className={cx('guest')}>
                    <div className={cx('box')}>
                      <label className={cx('summary-tittle')}>guest</label>
                      <p>1 guest</p>
                    </div>
                    <DownArrowIcon />
                  </button>
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Amenities;
