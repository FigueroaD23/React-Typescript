import "./Modal.scss"


interface PropsModal {
    children: JSX.Element,
    onClose: () => void
}
const Modal = ({ children, onClose }: PropsModal) => {
    return (
        <div className="ModalFixed">
            <div className="btn-cerrar" onClick={onClose}> <span>❌</span> </div>
            <div className="ContenidoModal">
                {children}
            </div>
        </div>
    )
}

export default Modal    