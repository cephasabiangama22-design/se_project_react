import "./ItemModal.css";
import closeDeleteBtnIcon from "../../assets/Union-close-btn.png";
import { useContext } from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDeleteClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__delete-btn ${
    isOwn ? "" : "modal__delete-btn_hidden"
  }`;

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
            className={itemDeleteButtonClassName}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
