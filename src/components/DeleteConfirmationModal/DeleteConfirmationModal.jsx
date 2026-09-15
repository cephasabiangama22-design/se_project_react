import "./DeleteConfirmationModal.css";
import closeBtnIcon from "../../assets/delete-close-btn.png";

export function DeleteConfirmationModal({ activeModal, onClose, onDelete }) {
  return (
    <div
      className={`modal ${
        activeModal === "delete-confirmation" ? "modal__opened" : ""
      }`}
    >
      <div className="modal__delete-confirmation">
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeBtnIcon}
            alt="close button icon"
            className="close__btn-icon"
          />
        </button>
        <p className="modal__delete-text">
          Are you sure you want to delete this item? <br /> This action is
          irreversible.
        </p>

        <div className="Modal__delete-btn">
          <button
            onClick={onDelete}
            type="button"
            className="modal__confirm-delete"
          >
            Yes, delete item
          </button>

          <button
            onClick={onClose}
            type="button"
            className="modal__cancel-delete"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
