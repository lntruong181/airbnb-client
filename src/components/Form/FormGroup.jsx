import classNames from 'classnames/bind';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const FormGroup = ({ errors, children }) => {
  return (
    <div className={cx('container')}>
      {children}
      {errors && <label>{errors.phone?.message}</label>}
    </div>
  );
};

export default FormGroup;
