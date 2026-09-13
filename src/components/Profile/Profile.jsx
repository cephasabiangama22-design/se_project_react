import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ clothingItems, onCardClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection clothingItems={clothingItems} onCardClick={onCardClick} />
    </section>
  );
}

export default Profile;
