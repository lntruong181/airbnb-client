import { RightArrowIcon } from '@/assets/Icons';
import images from '@/assets/Images';
import Image from '@/components/Image';
import classNames from 'classnames/bind';

import styles from './Amenities.module.scss';

const cx = classNames.bind(styles);

const Amenities = () => {
  return (
    <main className={cx('container')}>
      <div className='container-fluid g-0'>
        <div className='row'>
          <div className='col-sm-7'>
            <div className={cx('section', 'title-container')}>
              <div className={cx('heading')}>
                <h1>Private room in townhouse hosted by Bua</h1>
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
              <div className={cx('amenity')}>
                <span className={cx('amenity-icon')}>
                  <Image src={images.wifiIcon} alt='wifi-icon' />
                </span>
                <h4 className={cx('amenity-description')}>
                  Fast wifi
                  <span>
                    At 342 Mbps, you can take video calls and stream videos for
                    your whole group.
                  </span>
                </h4>
              </div>
              <div className={cx('amenity')}>
                <span className={cx('amenity-icon')}>
                  <Image src={images.doorOpenIcon} alt='door-open' />
                </span>
                <h4 className={cx('amenity-description')}>
                  Self check-in
                  <span>Check yourself in with the keypad.</span>
                </h4>
              </div>
              <div className={cx('amenity')}>
                <span className={cx('amenity-icon')}>
                  <Image src={images.calendarIcon} alt='calendar' />
                </span>
                <h4 className={cx('amenity-description')}>
                  Free cancellation before 12 Feb.
                </h4>
              </div>
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
          </div>
          <div className='col-sm-4'>
            <p>Sed ut perspiciatis...</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Amenities;
