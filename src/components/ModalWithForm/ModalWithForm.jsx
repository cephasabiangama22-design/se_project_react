import "./ModalWithForm.css";
import closeBtnIcon from "../../assets/close-icon-btn.png";

function ModalWithForm({
  children,
  buttonText,
  buttonName,
  buttonClassName,
  title,
  isOpen,
  onClose,
  name,
  onSubmit,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal__opened" : ""} `}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeBtnIcon}
            alt="close button icon"
            className="close__btn-icon"
          />
        </button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <div className="modal__button-container">
            <button
              type="submit"
              className={`"modal__submit-btn" ${buttonClassName || ""}`}
            >
              {buttonText}
            </button>
            <button type="button" className="modal__orlogin-btn">
              {buttonName}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
