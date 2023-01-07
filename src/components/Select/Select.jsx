import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';
const cx = classNames.bind(styles);

const Select = ({ options, label, className }) => {
  return (
    <div className={cx('container')}>
      {label && <label className={cx('text')}>{label}</label>}
      <select className={cx('list', className)}>
        {options &&
          options.map((option, index) => {
            return (
              <option className={cx('item')} key={index} value={option?.value}>
                {option.displayValue}
              </option>
            );
          })}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Select;
