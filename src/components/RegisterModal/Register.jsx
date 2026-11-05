import "./Register.css";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Register = ({
  handleRegistration,
  onClose,
  isOpen,
  handleLoginClick,
}) => {
  const defaultValues = {
    email: "",
    password: "",
    name: "",
    avatar: "",
  };

  const { values, handleChange } = useForm(defaultValues);

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen]);

  const onRegistration = (event) => {
    event.preventDefault();
    handleRegistration(values);
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
        value={values.email}
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
        value={values.password}
        onChange={handleChange}
      />

      <label htmlFor="name" className="modal__register">
        Name*
      </label>
      <input
        id="name"
        name="registration"
        placeholder="Name"
        type="text"
        className="register__input"
        value={values.name}
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
        value={values.avatar}
        onChange={handleChange}
      />
    </ModalWithForm>
  );
};

export default Register;
