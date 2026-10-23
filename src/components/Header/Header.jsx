import "./Header.css";
import logo from "../../assets/wtwr-Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleLoginClick,
  handleRegisterClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="header logo" />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <ToggleSwitch />

      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add Clothes
          </button>
          <NavLink className="header__navlink" to="/profile">
            <div className="header__user-container">
              <p className="header__username">{currentUser.name}</p>
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="header__Avatar"
              />
            </div>
          </NavLink>{" "}
        </>
      ) : (
        <>
          <button
            type="button"
            className="signup__btn"
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="Login__btn"
            onClick={handleLoginClick}
          >
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
