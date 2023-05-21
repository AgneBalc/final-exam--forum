import ReactDOM from 'react-dom'
import { StyledBackdrop, StyledModal } from './StyledModal'

const Backdrop = ({ onClose, className }) => {
  return (
    <StyledBackdrop
      className={className}
      onClick={onClose}
    >
    </StyledBackdrop>
  )
}

const ModalOverlay = ({ children, className }) => {
  return (
    <StyledModal className={className}>
      <div>{children}</div>
    </StyledModal>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = ({ onClose, children, className }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} className={className} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay className={className}>{children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;