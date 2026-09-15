import "./SideBar.css";
import sideBarAvatar from "../../assets/sidebar-avatar.png";

function SideBar() {
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
    </aside>
  );
}

export default SideBar;
