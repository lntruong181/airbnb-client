import {
  GridIcon,
  HeartIcon,
  MedalIcon,
  ShareIcon,
  StarIcon,
} from '@/assets/Icons';
import Button from '@/components/Button';
import Image from '@/components/Image';
import classNames from 'classnames/bind';

import styles from './Photos.module.scss';

const cx = classNames.bind(styles);

const Photos = () => {
  const imageCollections = [
    'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1464809142576-df63ca4ed7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbSUyMHBvcHVsYXIlMjBsb2NhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1552374516-0fffe5103f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpZXRuYW0lMjBwb3B1bGFyJTIwbG9jYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  ];

  return (
    <div className={cx('container')}>
      <h1 className={cx('heading')}>
        Zion Kolob Canyon-Farm Stay-cows, goats, alpaca
      </h1>
      <div className={cx('rate')}>
        <div className={cx('rate-left', 'flex')}>
          <span className={cx('rate-number', 'flex')}>
            <strong>
              <StarIcon />
            </strong>
            5.0
          </span>
          <span className={cx('dot')}>.</span>
          <u className={cx('pointer')}>14 reviews</u>
          <span className={cx('dot')}>.</span>
          <span className={cx('superhost', 'flex')}>
            <strong>
              <MedalIcon />
            </strong>
            Superhost
          </span>
          <span className={cx('dot')}>.</span>
          <u className={cx('pointer')}>Cedar City, Utah, United States</u>
        </div>
        <div className={cx('rate-right', 'flex')}>
          <Button shadowOnHover='true' className={cx('interact', 'flex')}>
            <ShareIcon /> <u>Share</u>
          </Button>
          <Button shadowOnHover='true' className={cx('interact', 'flex')}>
            <HeartIcon />
            <u>Save</u>
          </Button>
        </div>
      </div>
      <div className={cx('albums', 'flex')}>
        <div className={cx('item')}>
          <Image className={cx('hover')} src={imageCollections[3]} />
        </div>
        <div className={cx('item', 'flex')}>
          <span>
            <Image className={cx('hover')} src={imageCollections[1]} />
          </span>
          <span>
            <Image className={cx('hover')} src={imageCollections[2]} />
          </span>
        </div>
        <div className={cx('item', 'flex')}>
          <span>
            <Image className={cx('hover')} src={imageCollections[4]} />
          </span>
          <span>
            <Image className={cx('hover')} src={imageCollections[3]} />
          </span>
        </div>
        <div className={cx('show-all')}>
          <Button>
            <GridIcon /> Show all photos
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Photos;
