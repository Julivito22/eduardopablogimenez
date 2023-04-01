import { useState } from "react";
import validation from "./Validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={submitHandler} className={style.mainContainer}>
      <div>
        <label htmlFor="username">USERNAME: </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          className={style.cuadro}
        />
        <p>{errors.username}</p>
      </div>
      <div>
        <label htmlFor="password">PASSWORD: </label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          className={style.cuadro}
        />
      </div>
      <button type="submit" className={style.entrar}>LOGIN</button>
    </form>
  );
};

export default Form;