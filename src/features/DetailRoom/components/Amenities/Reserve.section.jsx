import classNames from 'classnames/bind';

import Wrapper from '@/components/Popper/Wrapper';
import { DownArrowIcon, FlaqIcon, TagIcon } from '@/assets/svgs';
import Button from '@/components/Button';

import styles from './Amenities.module.scss';

const cx = classNames.bind(styles);

const Reserve = () => {
  window.onscroll = function () {
    scrollRotate();
  };

  function scrollRotate() {
    // let image = document.getElementById('circle');
    // image.style.transform = 'rotate(' + window.pageYOffset / 5 + 'deg)';
  }
  return (
    <>
      <Wrapper className={cx('summary-wrapper')}>
        <div className={cx('content')}>
          <div className={cx('daily-prices')}>
            <span className={cx('price')}>
              <strong className={cx('price-num')}>
                <del className={cx('discount')}>$218</del> $186
              </strong>{' '}
              night
            </span>
            <button className={cx('review')}>
              <u>1 review</u>
            </button>
          </div>
          <div className={cx('detail')}>
            <button className={cx('time')}>
              <div className={cx('box', 'check-in-wrapper')}>
                <label className={cx('summary-tittle')}>Check-in</label>
                <p>12/21/2022</p>
              </div>
              <div className={cx('box', 'check-out-wrapper')}>
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
          <Button
            className={cx('checkout-btn')}
            isRound={true}
            scaleOnClick={true}
          >
            Reserve
          </Button>
          <p className={cx('note')}>You won't be charged yet</p>
          <div className={cx('summary-fees')}>
            <div className={cx('fee-box')}>
              <u className={cx('fee-tittle')}>$186 x 5 nights</u>
              <p className={cx('fee')}>$929</p>
            </div>
            <div className={cx('fee-box')}>
              <u className={cx('fee-tittle')}>Cleaning fee</u>
              <p className={cx('fee')}>$150</p>
            </div>
            <div className={cx('fee-box')}>
              <u className={cx('fee-tittle')}>Service fee</u>
              <p className={cx('fee')}>$152</p>
            </div>
          </div>
          <div className={cx('total-fee')}>
            <div className={cx('fee-box')}>
              <p className={cx('total-tittle')}>Total before taxes</p>
              <p className={cx('total-price')}>$1,231</p>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className={cx('analysis-wrapper')}>
        <div className={cx('analysis')}>
          <p className={cx('analysis-heading')}>
            <strong>Lower price.</strong> Your dates are $163 less than the avg.
            nightly rate of the last 60 days.
          </p>
          <TagIcon />
        </div>
      </Wrapper>
      <div className={cx('report')}>
        <u className={cx('report-btn')}>
          <FlaqIcon />
          Report this listing
        </u>
      </div>
    </>
  );
};

export default Reserve;
