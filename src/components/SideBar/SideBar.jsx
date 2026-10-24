import "./SideBar.css";
import sideBarAvatar from "../../assets/sidebar-avatar.png";

function SideBar({ handleSignOut, onEditProfile }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img
          src={sideBarAvatar}
          alt="Terrence Tegegne"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">Terrence Tegegne</p>
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
