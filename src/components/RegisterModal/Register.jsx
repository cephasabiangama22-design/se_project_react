import "./Register.css";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Register = ({
  handleRegistration,
  onClose,
  isOpen,
  handleLoginClick,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onRegistration = (event) => {
    event.preventDefault();
    handleRegistration(data);
  };

  return (
    <ModalWithForm
      title={"Sign Up"}
      onSubmit={onRegistration}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Sign Up"}
      buttonName={"or Log In"}
      buttonClassName={"register__submit-btn"}
      onClick={handleLoginClick}
      onChange={handleChange}
    >
      <label htmlFor="email" className="modal__register">
        Email*
      </label>
      <input
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        className="register__input"
        value={data.email}
        onChange={handleChange}
      />

      <label htmlFor="password" className="modal__register">
        Password*
      </label>
      <input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        className="register__input"
        value={data.passowrd}
        onChange={handleChange}
      />

      <label htmlFor="name" className="modal__register">
        Name*
      </label>
      <input
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        className="register__input"
        value={data.name}
        onChange={handleChange}
      />

      <label htmlFor="avatar" className="modal__register">
        Avatar URL*
      </label>
      <input
        id="avatar"
        name="avatar"
        placeholder="Avatar URL"
        type="text"
        className="register__input"
        value={data.avatar}
        onChange={handleChange}
      />
    </ModalWithForm>
  );
};

export default Register;
