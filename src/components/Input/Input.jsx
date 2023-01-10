import classNames from 'classnames/bind';
import _ from 'lodash';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const Input = ({
  className,
  type,
  required,
  register,
  prefix,
  label,
  autoFocus = false,
  errors,
}) => {
  const errorClassName = _.isEmpty(errors) ? '' : 'error';

  return (
    <label className={cx('container', className, errorClassName)}>
      <input
        className={cx('input')}
        type={type}
        required={required}
        placeholder=' '
        autoFocus={autoFocus}
        {...register}
        autoCorrect='false'
      />

      {label && <label className={cx('label')}>{label}</label>}
      {label && <label className={cx('prefix')}>{prefix}</label>}
    </label>
  );
};

export default Input;
