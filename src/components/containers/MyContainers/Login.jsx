import React, {useCallback, useState} from "react";
import styles from "../../../styles/login.module.css";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "неверный логин",
    pass: "неверный пароль",
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  }, [])

  // Генерируем форму для ошибки
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Форма для логина
  const renderForm = (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label>Логин </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className={styles.inputContainer}>
          <label>Пароль </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className={styles.buttonContainer}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className={styles.app}>
      <div className={styles.loginForm}>
        <div className={styles.title}>Войти</div>
        {isSubmitted ? <div>Пользователь успешно вошел</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
