import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { coordinates, apiKey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../Context/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../Context/CurrentUserContext";
import {
  getItems,
  addItem,
  deleteItem,
  updateUser,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Login from "../LoginModal/Login";
import * as auth from "../../utils/auth";
import Register from "../RegisterModal/Register";
import ProtectedRoute from "../ProtectedRoute/PotectedRoute";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const navigate = useNavigate();

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onAddItem = (inputValue) => {
    const newCardData = {
      name: inputValue.name,
      imageUrl: inputValue.imageUrl,
      weather: inputValue.weatherType,
    };

    const token = localStorage.getItem("jwt");

    addItem(newCardData, token)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleUpdateUser = (userData) => {
    const token = localStorage.getItem("jwt");

    updateUser(userData, token)
      .then((updateUser) => {
        setCurrentUser(updateUser);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
    setActiveModal("login");
  };

  function handleLogin({ email, password }) {
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);

          return auth.validate(res.token);
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        closeActiveModal();
        navigate("/");
      })
      .catch(console.error);
  }

  function handleRegistration({ name, avatar, email, password }) {
    if (!name || !avatar || !email || !password) {
      return;
    }
    auth
      .register(name, avatar, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch(console.error);
  }

  function handleDeleteItem() {
    const token = localStorage.getItem("jwt");
    deleteItem(selectedCard._id, token)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== selectedCard._id),
        );

        closeActiveModal();
      })
      .catch(console.error);
  }

  const handleDeleteClick = () => {
    setActiveModal("delete-confirmation");
  };

  function handleLoginClick() {
    setActiveModal("login");
  }

  function handleRegisterClick() {
    setActiveModal("register");
  }

  function handleEditProfileClick() {
    setActiveModal("EditProfileModal");
  }

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        setClothingItems([...data].reverse());
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      auth
        .validate(token)
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("jwt");
          setCurrentUser({});
          setIsLoggedIn(false);
        });
    }
  }, []);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              handleLoginClick={handleLoginClick}
              handleRegisterClick={handleRegisterClick}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      clothingItems={clothingItems}
                      onCardClick={handleCardClick}
                      handleAddClick={handleAddClick}
                      handleSignOut={handleSignOut}
                      onEditProfile={handleEditProfileClick}
                      onCardLike={handleCardLike}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>

          <AddItemModal
            isOpen={activeModal}
            onClose={closeActiveModal}
            onAddItem={onAddItem}
          />

          <Login
            handleLogin={handleLogin}
            onClose={closeActiveModal}
            isOpen={activeModal === "login"}
            handleRegisterClick={handleRegisterClick}
          />

          <Register
            handleRegistration={handleRegistration}
            onClose={closeActiveModal}
            isOpen={activeModal === "register"}
            handleLoginClick={handleLoginClick}
          />

          <EditProfileModal
            isOpen={activeModal === "EditProfileModal"}
            onClose={closeActiveModal}
            onUpdateUser={handleUpdateUser}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onDeleteClick={handleDeleteClick}
          />
          <DeleteConfirmationModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            onDelete={handleDeleteItem}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
