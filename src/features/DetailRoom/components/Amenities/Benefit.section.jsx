import classNames from 'classnames/bind';

import Image from '@/components/Image';
import useModal from '@/hooks/useModal';
import { CancelIcon } from '@/assets/svgs';
import Modal from '@/components/Modal';

import styles from './Amenities.module.scss';

const cx = classNames.bind(styles);

const Benefit = () => {
  const { isShowing, toggle } = useModal();

  const benefits = [
    {
      tittle: 'Booking Protection Guarantee',
      content:
        'In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.',
    },
    {
      tittle: 'Check-In Guarantee',
      content:
        'If you can’t check into your home and the Host cannot resolve the issue, we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.',
    },
    {
      tittle: 'Get-What-You-Booked Guarantee',
      content:
        'If at any time during your stay you find your listing isn’t as advertised—for example, the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed—you’ll have three days to report it and we’ll find you a similar or better home, or we’ll refund you.',
    },
    {
      tittle: '24-hour Safety Line',
      content:
        'If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.',
    },
    {
      tittle: '24-hour Safety Line',
      content:
        'If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.',
    },
    {
      tittle: '24-hour Safety Line',
      content:
        'If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.',
    },
    {
      tittle: '24-hour Safety Line',
      content:
        'If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.',
    },
  ];

  return (
    <div className={cx('section', 'homestay-benefit')}>
      <Image
        className={cx('logo')}
        src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'
        alt='homestay-logo'
      />
      <p className={cx('guide')}>
        Every booking includes free protection from Host cancellations, listing
        inaccuracies, and other issues like trouble checking in.
      </p>
      <button onClick={toggle} className={cx('more')}>
        Learn more
      </button>
      <Modal isOpen={isShowing} onClose={toggle} type={'medium'}>
        <div className={cx('more-offer')}>
          <div className={cx('close-section')}>
            <p className={cx('close-icon')} onClick={toggle}>
              <CancelIcon />
            </p>
          </div>
          <div className={cx('more-benefit-box')}>
            <div className={cx('more-benefit-introduce')}>
              <Image
                className={cx('introduce-logo')}
                src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'
                alt='homestay-logo'
              />
              <p className={cx('guide')}>
                AirCover is comprehensive protection included for free with
                every booking.
              </p>
            </div>
            <div className={cx('more-benefit-content')}>
              {benefits &&
                benefits.map((benefit) => (
                  <div className={cx('content-section')}>
                    <h3 className={cx('content-tittle')}>{benefit.tittle}</h3>
                    <p className={cx('content-description')}>
                      {benefit.content}
                    </p>
                  </div>
                ))}
              <p className={cx('guide')}>
                Find complete details on how AirCover protects your booking in
                our <strong className={cx('guide-btn')}>Help Center</strong>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Benefit;
