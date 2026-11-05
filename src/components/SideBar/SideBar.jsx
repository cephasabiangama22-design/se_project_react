import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";
import sideBarAvatar from "../../assets/sidebar-avatar.png";

function SideBar({ handleSignOut, onEditProfile }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__page">
        <button
          type="buttton"
          className="sidebar__edit-prfile"
          onClick={onEditProfile}
        >
          Change profile data
        </button>
        <button
          type="button"
          className="sidebar__signout-btn"
          onClick={handleSignOut}
        >
          Log out
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
