import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = ({ src, alt, className }) => {
  return (
    <img
      loading='lazy'
      className={cx('container', className)}
      src={src}
      alt={alt}
    ></img>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
