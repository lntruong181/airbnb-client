import classNames from 'classnames/bind';

import {
  GridIcon,
  LeftLightArrowIcon,
  ShareIcon,
  SmallHeartIcon,
  StarIcon,
} from '@/assets/svgs';
import Button from '@/components/Button';
import useModal from '@/hooks/useModal';
import Image from '@/components/Image';
import Modal from '@/components/Modal';

import styles from './Photos.module.scss';

const cx = classNames.bind(styles);

const Photos = () => {
  const { isShowing, toggle } = useModal();

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
          <u className={cx('pointer')}>Rockbridge, Ohio, United States</u>
        </div>
        <div className={cx('rate-right', 'flex')}>
          <Button
            shadowOnHover='true'
            className={cx('interact', 'flex')}
            icon={<ShareIcon />}
          >
            <u>Share</u>
          </Button>
          <Button
            shadowOnHover='true'
            className={cx('interact', 'flex')}
            icon={<SmallHeartIcon />}
          >
            <u>Save</u>
          </Button>
        </div>
      </div>
      <div className={cx('albums', 'flex')}>
        <div className={cx('item', 'hover')}>
          <Image
            className={cx('hover')}
            src={imageCollections[3]}
            alt='album-image-1'
          />
        </div>
        <div className={cx('item', 'flex')}>
          <div className={cx('hover')}>
            <Image
              className={cx('hover')}
              src={imageCollections[1]}
              alt='album-image-2'
            />
          </div>
          <div className={cx('hover')}>
            <Image
              className={cx('hover')}
              src={imageCollections[2]}
              alt='album-image-3'
            />
          </div>
        </div>
        <div className={cx('item', 'flex')}>
          <div className={cx('hover')}>
            <Image
              className={cx('hover')}
              src={imageCollections[4]}
              alt='album-image-4'
            />
          </div>
          <div className={cx('hover')}>
            <Image
              className={cx('hover')}
              src={imageCollections[3]}
              alt='album-image-5'
            />
          </div>
        </div>
        <div className={cx('show-all')}>
          <Button
            className={cx('show-btn')}
            isRound={true}
            scaleOnClick={true}
            onClick={toggle}
            icon={<GridIcon />}
          >
            Show all photos
          </Button>
        </div>
        <Modal isOpen={isShowing} onClose={toggle} type={'large'}>
          <div className={cx('more-offer')}>
            <div className={cx('close-section')}>
              <div className={cx('close-section-box')}>
                <p className={cx('close-icon')} onClick={toggle}>
                  <LeftLightArrowIcon />
                </p>
                <div className={cx('rate-right', 'flex')}>
                  <Button
                    shadowOnHover='true'
                    className={cx('interact', 'flex')}
                    icon={<ShareIcon />}
                  >
                    <u>Share</u>
                  </Button>
                  <Button
                    shadowOnHover='true'
                    className={cx('interact', 'flex')}
                    icon={<SmallHeartIcon />}
                  >
                    <u>Save</u>
                  </Button>
                </div>
              </div>
            </div>
            <div className={cx('album')}>
              <div className={cx('album-column')}>
                <div className={cx('album-row')}>
                  <Image
                    className={cx('album-image')}
                    src='https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720'
                  />
                  <Image
                    className={cx('album-image')}
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/f4f7b242-db33-46fc-9080-c3d6a6fd55ec.jpeg?im_w=720'
                  />
                  <Image
                    className={cx('album-image')}
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720'
                  />
                  <Image
                    className={cx('album-image')}
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/4756e699-f474-4ca7-8b77-06b12715a6cb.jpeg?im_w=720'
                  />
                  <Image
                    className={cx('album-image')}
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/fca892a4-3481-4ad1-9f92-404feaa42e9f.jpeg?im_w=720'
                  />
                  <Image
                    className={cx('album-image')}
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/36d8007a-0de5-439d-9fec-1c2d7b53a147.jpeg?im_w=720'
                  />
                  <Image
                    className={cx('album-image')}
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/f95b0a2e-0272-469e-a56c-433b9cc4ffdb.jpeg?im_w=1200'
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Photos;
