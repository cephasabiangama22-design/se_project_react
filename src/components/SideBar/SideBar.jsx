import "./SideBar.css";
import sideBarAvatar from "../../assets/sidebar-avatar.png";

function SideBar({ handleSignOut }) {
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
        <p className="sidebar__change-profile">Change profile data</p>
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
