import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  handleOnClick,
  className,
  color,
  isRound = false,
  shadowOnHover = false,
  scaleOnHover = false,
  children,
}) => {
  const round = isRound ? 'round' : '';
  const shadow = shadowOnHover ? 'shadow' : '';
  const scale = scaleOnHover ? 'scale' : '';
  return (
    <button
      className={cx('container', className, color, round, shadow, scale)}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
export default Button;
