import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  handleOnClick,
  className,
  shadowOnHover = false,
  children,
}) => {
  const shadow = shadowOnHover ? 'shadow' : '';

  return (
    <button
      className={cx('container', className, shadow)}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
export default Button;
