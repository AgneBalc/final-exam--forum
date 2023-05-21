import ReactDOM from 'react-dom'
import { StyledBackdrop, StyledModal } from './StyledModal'

const Backdrop = ({ onClose }) => {
  return (
    <StyledBackdrop
      onClick={onClose}
    >
    </StyledBackdrop>
  )
}

const ModalOverlay = ({ children }) => {
  return (
    <StyledModal>
      <div>{children}</div>
    </StyledModal>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = ({ onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;