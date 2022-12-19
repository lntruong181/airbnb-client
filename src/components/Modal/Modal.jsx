import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = ({ type = 'medium', isOpen, onClose, className, children }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgb(34 34 34 / 80%)',
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      preventScroll={true}
      onRequestClose={onClose}
      style={customStyles}
      className={cx('container', type)}
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Modal;
