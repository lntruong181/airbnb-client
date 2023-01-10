import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  onClick,
  className,
  leftIcon,
  rightIcon,
  isRound = false,
  shadowOnHover = false,
  scaleOnClick = false,
  children,
}) => {
  const shadow = shadowOnHover ? 'shadow' : '';
  const round = isRound ? 'round' : '';
  const scale = scaleOnClick ? 'scale' : '';
  return (
    <button
      className={cx('container', className, round, scale, shadow)}
      onClick={onClick}
    >
      {leftIcon && <label className={cx('icon')}>{leftIcon}</label>}
      <span className={cx('content')}>{children}</span>
      {rightIcon && <label className={cx('icon')}>{rightIcon}</label>}
    </button>
  );
};
export default Button;
