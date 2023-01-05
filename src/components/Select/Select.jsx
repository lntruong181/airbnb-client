import classNames from 'classnames/bind';

import styles from './Select.module.scss';
const cx = classNames.bind(styles);

const Select = ({ options, label }) => {
  return (
    <div className={cx('wrap')}>
      <label className={cx('text')}>{label}</label>
      <select className={cx('list')}>
        {options &&
          options.map((option) => {
            return (
              <option className={cx('item')} value={option?.value}>
                {option.displayValue}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Select;
