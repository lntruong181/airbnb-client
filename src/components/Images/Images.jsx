import classNames from 'classnames/bind';
import styles from './Images.module.scss';

const cx = classNames.bind(styles);

const Images = ({ imageSrc, imageAlt, customClassName }) => {
  return (
    <span className={cx('container')}>
      <img src={imageSrc} alt={imageAlt}></img>
    </span>
  );
};
export default Images;
