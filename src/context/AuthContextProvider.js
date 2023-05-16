import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../fire";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  // состояния для хранения данных
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  
  // const handleLogin = (closeModal) => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       setIsLoggedIn(true);
  //       closeModal(); // Закрыть модальное окно после успешного входа
  //     })
  //     .catch((err) => {
  //       // обработка ошибок
  //     });
  // };
  
  // const handleSignUp = (closeModal) => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       closeModal(); // Закрыть модальное окно после успешной регистрации
  //       navigate("/kfc"); // переход на home, в случае если регистрация прошла успешно
  //     })
  //     .catch((err) => {
  //       // обработка ошибок
  //     });
  // };
  
  const handleLogin = (closeModal) => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoggedIn(true);
        closeModal(); // Закрыть модальное окно после успешного входа
      })
      .catch((err) => {
        // Обработка ошибок
      });
  };
  
  const handleSignUp = (closeModal) => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        closeModal(); // Закрыть модальное окно после успешной регистрации
        navigate("/kfc"); // переход на home, если регистрация прошла успешно
      })
      .catch((err) => {
        // Обработка ошибок
      });
  };
  

  const handleLogout = () => {
    fire.auth().signOut();
  };

  // функция для отслеживания состояния авторизации
  const authListener = () => {
    // отлавливаем user'a через встроенную в firebase функцию
    fire.auth().onAuthStateChanged((user) => {
      // если user  существует
      if (user) {
        clearInputs();
        setUser(user); // то сохраняем его в состоянии
      } else {
        setUser(""); // если usera нет, то в состоянии ""
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  console.log(user);

  const values = {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleSignUp,
    handleLogin,
    handleLogout,
  };

  return (
    <authContext.Provider value={values}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
