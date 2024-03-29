import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles);

const Icon = ({ className, onClick, scaleOnHover, isRound, children }) => {
  const scale = scaleOnHover ? 'scale' : '';
  const round = isRound ? 'round' : '';
  return (
    <div onClick={onClick} className={cx('container', className, round, scale)}>
      {children}
    </div>
  );
};
export default Icon;
