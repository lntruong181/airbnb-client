import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';
const cx = classNames.bind(styles);

const Select = ({ options, label, onChange, className }) => {
  const handleChangeOption = (event) => {
    const phoneCode = event.target.value;
    onChange(phoneCode);
  };

  return (
    <div className={cx('container')}>
      {label && <label className={cx('text')}>{label}</label>}
      <select onChange={handleChangeOption} className={cx('list', className)}>
        {options &&
          options.map((option) => {
            return (
              <option
                className={cx('item')}
                key={option.value}
                value={option.value}
              >
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
