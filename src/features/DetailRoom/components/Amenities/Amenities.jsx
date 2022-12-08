import images from '@/assets/Images';
import Button from '@/components/Button';
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
            <div className={cx('section', 'homestay-history')}>
              <Image
                className={cx('logo')}
                src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'
                alt='homestay-logo'
              />
              <p className={cx('guide')}>
                Every booking includes free protection from Host cancellations,
                listing inaccuracies, and other issues like trouble checking in.
              </p>
              <a className={cx('learn-more')}>Learn more</a>
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
