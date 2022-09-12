
interface PropsModal{
    children:JSX.Element,
    onClose: ()=> void
}
const Modal = ({children,onClose}:PropsModal) => {
  return (
    <div className="modal">
        <div className="btn" onClick={onClose}> cerrar el modal </div>
        {children}
    </div>
  )
}

export default Modal    