import classNames from 'classnames/bind';

import { CancelIcon, RightArrowIcon } from '@/assets/svgs';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal';

import styles from './Amenities.module.scss';

const cx = classNames.bind(styles);

const History = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className={cx('section', 'homestay-history')}>
      <div className={cx('history-brief', 'short')}>
        <span>
          <span>
            MAITRI CHIT ROOM - is a spacious en-suite open plan room located on
            the 3rd floor of the renovated 40-year old shophouse call "Ba hao".
            The room is a Thai-contemporary inspired, with a huge glass window
            overlooking the vibrant "soi nana" near Chinatown. <br />
            <br />
            No matter you need natural daylight or a clean sleeping, this room
            is suitable for you with double layer roll-up curtain, it can be
            adjusted to suit your mood.
            <br />
            <br />
            Extra bed is available upon request.
            <br />
            <br />
            <span className={cx('highlight')}>The space</span>
            <br />
            Bā hào 八號 is a Bangkok-based co-living platform located near china
            town. Our place is a renovated 40-year old shop house in a vibrant
            area of Bangkok’s china town consists of; <br />
            <br />
            1st floor is Bā hào 八號 – Oriental-style Bar focusing on beers and
            Chinese-inspired comfort bar food <br />
            <br />
            2nd floor is MITRPHAN – a shared living room equipped with 55-inch
            LCD TV with Netflix, pantry with complimentary coffee, tea, snack,
            drinking water, soft drinks, toast, spreads and utensils.
            <br />
            <br />
            3rd floor (this room) is MAITRI CHIT room – an en-suite room with
            magnificent view of Soi Nana <br />
            <br />
            4th floor is SANTIPHAP – an en-suite room with private balcony and
            your own visual portrait of one of the most sacred temple in
            Bangkok, Trimitr Temple. See here: http://abnb.me/EVmg/PTWaEYd7UC
            <br /> <br />
            Bā hào 八號 means “house no. 8” in Chinese language which is
            obviously our shop house address. Number 8 is considered a lucky
            number for Chinese people. The main reason has to do with the
            pronunciation of the word for the number 8 in China. It is
            pronounced "ba" and sounds like the word for prosperity which is
            pronounced "fa”.
          </span>
        </span>
      </div>
      <button className={cx('more')} onClick={toggle}>
        Show More{' '}
        <span>
          <RightArrowIcon />
        </span>
      </button>
      <Modal isOpen={isShowing} onClose={toggle} type={'small'}>
        <div className={cx('more-offer')}>
          <div className={cx('close-section')}>
            <p className={cx('close-icon')} onClick={toggle}>
              <CancelIcon />
            </p>
          </div>
          <div className={cx('more-history-section')}>
            <h2 className={cx('more-history-tittle')}>
              What this place offers
            </h2>
            <div className={cx('history-brief')}>
              <span>
                <span>
                  MAITRI CHIT ROOM - is a spacious en-suite open plan room
                  located on the 3rd floor of the renovated 40-year old
                  shophouse call "Ba hao". The room is a Thai-contemporary
                  inspired, with a huge glass window overlooking the vibrant
                  "soi nana" near Chinatown. <br />
                  <br />
                  No matter you need natural daylight or a clean sleeping, this
                  room is suitable for you with double layer roll-up curtain, it
                  can be adjusted to suit your mood.
                  <br />
                  <br />
                  Extra bed is available upon request.
                  <br />
                  <br />
                  <span className={cx('highlight')}>The space</span>
                  <br />
                  Bā hào 八號 is a Bangkok-based co-living platform located near
                  china town. Our place is a renovated 40-year old shop house in
                  a vibrant area of Bangkok’s china town consists of; <br />
                  <br />
                  1st floor is Bā hào 八號 – Oriental-style Bar focusing on
                  beers and Chinese-inspired comfort bar food <br />
                  <br />
                  2nd floor is MITRPHAN – a shared living room equipped with
                  55-inch LCD TV with Netflix, pantry with complimentary coffee,
                  tea, snack, drinking water, soft drinks, toast, spreads and
                  utensils.
                  <br />
                  <br />
                  3rd floor (this room) is MAITRI CHIT room – an en-suite room
                  with magnificent view of Soi Nana <br />
                  <br />
                  4th floor is SANTIPHAP – an en-suite room with private balcony
                  and your own visual portrait of one of the most sacred temple
                  in Bangkok, Trimitr Temple. See here:
                  http://abnb.me/EVmg/PTWaEYd7UC
                  <br /> <br />
                  Bā hào 八號 means “house no. 8” in Chinese language which is
                  obviously our shop house address. Number 8 is considered a
                  lucky number for Chinese people. The main reason has to do
                  with the pronunciation of the word for the number 8 in China.
                  It is pronounced "ba" and sounds like the word for prosperity
                  which is pronounced "fa”. <br /> <br />
                  Bā hào 八號 means “house no. 8” in Chinese language which is
                  obviously our shop house address. Number 8 is considered a
                  lucky number for Chinese people. The main reason has to do
                  with the pronunciation of the word for the number 8 in China.
                  It is pronounced "ba" and sounds like the word for prosperity
                  which is pronounced "fa”.
                </span>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default History;
