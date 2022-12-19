import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  onClick,
  className,
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
      {children}
    </button>
  );
};
export default Button;
