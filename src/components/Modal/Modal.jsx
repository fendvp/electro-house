import "./Modal.css";

function Modal({
  show,
  title,
  message,
  onClose,
  children,
  closeText = "Cerrar",
}) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div
        className="modal-container"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            {title}
          </h2>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          {message && <p>{message}</p>}
          {children}
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn modal-button"
            onClick={onClose}
          >
            {closeText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
