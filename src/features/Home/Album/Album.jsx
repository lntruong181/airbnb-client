import { HeartIcon } from '@/enum/icon.enum';
import classNames from 'classnames/bind';

import styles from './Album.module.scss';

const cx = classNames.bind(styles);

const Album = () => {
  return (
    <section>
      <div className={cx('item')}>
        <div className={cx('image-container')}>
          <img src='https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
          <button>
            <span>
              <HeartIcon />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Album;
