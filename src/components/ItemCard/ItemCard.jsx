import { useContext } from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";
import likeDefaultBtn from "../../assets/like-default-icon.png";
import likeActiveBtn from "../../assets/liked-button-btn.png";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike({
      id: item._id,
      isLiked: isLiked,
    });
  };
  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  return (
    <li className="card">
      <img
        onClick={handleCardClick}
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
      />
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLike}
          >
            <img
              src={isLiked ? likeActiveBtn : likeDefaultBtn}
              alt=""
              className="like__default-icon"
            />
          </button>
        )}
      </div>
    </li>
  );
}

export default ItemCard;
