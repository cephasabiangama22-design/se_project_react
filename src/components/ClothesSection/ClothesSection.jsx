import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";

function ClothesSection({ clothingItems, onCardClick, handleAddClick }) {
  const currentUser = useContext(CurrentUserContext);
  const userClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id,
  );
  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__title">Your items</p>
        <button
          className="clothes-section__btn"
          type="button"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__item">
        {userClothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
