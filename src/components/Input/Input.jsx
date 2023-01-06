import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const Input = ({ type, label }) => {
  return (
    <div className={cx('container')}>
      {label && <label className={cx('label')}>{label}</label>}
      <input type={type} />
    </div>
  );
};

export default Input;
