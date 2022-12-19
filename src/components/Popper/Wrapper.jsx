import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Wrapper = ({ onRender, className, children }) => {
  return <div className={cx('wrapper', className, onRender)}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onRender: PropTypes.func,
};

export default Wrapper;
