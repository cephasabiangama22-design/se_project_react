import "./ItemModal.css";
import closeBtnIcon2 from "../../assets/Union-close-btn2.png";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal__opened" : ""} `}
    >
      <div className="modal__content modal__content_type_input">
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeBtnIcon2}
            alt="close button icon"
            className="close__btn-icon"
          />{" "}
        </button>
        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
