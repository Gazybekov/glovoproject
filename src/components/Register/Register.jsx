import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="box">
        <div className="box_h1">
          <h1>Зарегистрироваться в Glovo</h1>
        </div>
        <div className="box_h4">
          <h4>
            Уже зарегистрированы? <button>Войти</button>
          </h4>
        </div>
        <div className="box_btn">
          <button>
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/icons/social/facebook.svg"
              alt=""
            />
            Регистрация c помощью Facebook
          </button>
        </div>
        <div className="inp1">
          <img
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
            alt=""
          />
          <input type="text" placeholder="Имя" />
          <hr />
        </div>
        <div className="inp2">
          <img
            src="https://logowik.com/content/uploads/images/783_email.jpg"
            alt=""
          />
          <input type="text" placeholder="Адрес эл.почты" />
          <hr />
        </div>
        <div className="inp3">
          <img
            src="https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-circle-password-icon-vectors-png-image_1738057.jpg"
            alt=""
          />
          <input type="password" placeholder="Пароль" />
          <hr />
        </div>
        <div className="btn2">
          <button>Зарегистрироваться c помощью эл.почты</button>
        </div>
        <div className="p">
          <p>
            Создавая учетную запись, вы автоматически принимаете наши Условия
            обслуживания, Политика конфиденциальности и Политика использования
            файлов cookie
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
