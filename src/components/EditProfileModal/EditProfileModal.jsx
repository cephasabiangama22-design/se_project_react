import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";

const EditProfileModal = ({ onClose, isOpen, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      avatar,
    });
  };

  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [isOpen, currentUser]);
  return (
    <ModalWithForm
      title={"Change profile data"}
      onSubmit={handleSubmit}
      buttonText={"Save change"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label htmlFor="editprofile-name" className="editprofile__label">
        Name
      </label>
      <input
        className="editprofile__input"
        id="editprofile-name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />

      <label htmlFor="avatar" className="editprofile__label">
        Avatar URL
      </label>
      <input
        value={avatar}
        id="avatar"
        placeholder="URL"
        type="url"
        className="editprofile__input"
        onChange={handleAvatarChange}
      />
    </ModalWithForm>
  );
};

export default EditProfileModal;
