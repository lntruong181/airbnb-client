import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Modal = ({ isOpen, onClose, className, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      preventScroll={true}
      onRequestClose={onClose}
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
