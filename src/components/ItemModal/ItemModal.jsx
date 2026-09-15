import "./ItemModal.css";
import closeDeleteBtnIcon from "../../assets/Union-close-btn.png";

function ItemModal({ activeModal, onClose, card, onDeleteClick }) {
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal__opened" : ""} `}
    >
      <div className="modal__content modal__content_type_input">
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeDeleteBtnIcon}
            alt="close button icon"
            className="close__btn-icon"
          />
        </button>

        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <div className="modal__bottom-container">
          <div className="modal__footer">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">weather: {card.weather}</p>
          </div>
          <button
            onClick={onDeleteClick}
            type="button"
            className="modal__delete-btn"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
