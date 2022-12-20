import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = ({ type, isOpen, onClose, className, children }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgb(34 34 34 / 80%)',
    },
  };

  return (
    <ReactModal
      className={cx('container', type, className)}
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
      preventScroll={true}
      shouldCloseOnEsc={true}
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Modal;
