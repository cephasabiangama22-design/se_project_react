import { useContext, useState } from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ onClose, isOpen, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);
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
  return (
    <ModalWithForm
      title={"Edit profile"}
      onSubmit={handleSubmit}
      buttonText={"Save change"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={handleNameChange} />

      <label htmlFor="avatar">Avatar URL</label>
      <input
        value={avatar}
        id="avatar"
        type="url"
        onChange={handleAvatarChange}
      />
    </ModalWithForm>
  );
};

export default EditProfileModal;
