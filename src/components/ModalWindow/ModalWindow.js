import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai'; // Импортируйте иконку закрытия
Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(44, 44, 108, 0.7)',
  },
  content: {
    width: '80%',
    height: '80vh',
    margin: 'auto',
    padding: 11,
    border: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
    fontSize: '24px',
    backgroundColor: 'white',
    color: 'black',
    zIndex: 1,
    borderRadius: 50,
  },
};

const ModalWindow = ({ isOpen, onClose, component }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Video"
    >
      <AiOutlineClose
        style={customStyles.closeButton}
        onClick={onClose} // Закрыть модальное окно при клике
      />
      {component}
    </Modal>
  );
};

export default ModalWindow;
