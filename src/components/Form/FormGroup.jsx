import classNames from 'classnames/bind';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const FormGroup = ({ errors, name, children }) => {
  return (
    <div className={cx('container')}>
      {children}
      {errors && <label>{errors[name]?.message}</label>}
    </div>
  );
};

export default FormGroup;
