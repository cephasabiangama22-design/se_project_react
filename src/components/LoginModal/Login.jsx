import { useForm } from "../../hooks/useForm";
import "./login.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Login = ({ handleLogin, onClose, isOpen, handleRegisterClick }) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { values, handleChange } = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <ModalWithForm
      title={"Log In"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={"Log In"}
      buttonName={"or Sign Up"}
      buttonClassName={"register__submit-btn"}
      onSecondaryClick={handleRegisterClick}
    >
      <label htmlFor="email" className="modal__login">
        Email:
      </label>
      <input
        type="email"
        required
        name="email"
        placeholder="email"
        className="login__input"
        id="email"
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor="password" className="modal__login">
        Password:
      </label>
      <input
        type="password"
        required
        id="password"
        name="password"
        placeholder="password"
        className="login__input"
        value={values.password}
        onChange={handleChange}
      />
    </ModalWithForm>
  );
};

export default Login;
