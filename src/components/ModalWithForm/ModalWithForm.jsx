import "./ModalWithForm.css";
import closeBtnIcon from "../../assets/close-icon-btn.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  name,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${activeModal === "add garment" ? "modal__opened" : ""} `}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeBtnIcon}
            alt="close button icon"
            className="close__btn-icon"
          />{" "}
        </button>
        <form className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
