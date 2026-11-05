import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({
  clothingItems,
  onCardClick,
  handleAddClick,
  handleSignOut,
  onEditProfile,
  isLoggedIn,
  onCardLike,
}) {
  return (
    <section className="profile">
      <SideBar handleSignOut={handleSignOut} onEditProfile={onEditProfile} />

      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        handleAddClick={handleAddClick}
        isLoggedIn={isLoggedIn}
        onCardLike={onCardLike}
      />
    </section>
  );
}

export default Profile;
