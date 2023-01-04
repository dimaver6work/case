import React from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { customStylesModal } from "./customStylesModal";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useField,
} from "formik";
import * as Yup from "yup";
import x from "../assets/x.svg";
import vk from "../assets/signVk.svg";
import google from "../assets/signGoogle.svg";
const ModalSignUp = ({
  modalSignUpActive,
  setModalSignUpActive,
  setModalSignInActive,
}) => {
  function closeModal() {
    setModalSignUpActive(false);
  }

  let changeToSignIn = () => {
    closeModal();
    setModalSignInActive(true);
  };
  const initialValues = {
    email: "",
    passwod: "",
    passwod2: "",

    name: "",

    id: Date.now(),
  };

  return (
    <Modal
      isOpen={modalSignUpActive}
      onRequestClose={closeModal}
      style={customStylesModal}
      ariaHideApp={false}
    >
      <div className="contentModal" onClick={(e) => e.stopPropagation()}>
        <img onClick={closeModal} src={x} alt="close" />
        <h2>Регистрация</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            email: Yup.string()
              .min(5, "Название должно быть больше 5 символов")
              .max(30, "Название должно быть меньше 30 символов")
              .required("Обязательное поле"),
            password: Yup.string()
              .min(8, "Must be 8 characters or more")
              .required("Обязательное поле"),
            password2: Yup.string()
              .min(8, "Must be 8 characters or more")
              .required("Обязательное поле"),
            name: Yup.string()
              .min(3, "Must be 3 characters or more")
              .required("Обязательное поле"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            closeModal();
          }}
        >
          {({ values }) => (
            <Form className="form">
              <p>
                У вас уже есть аккаунт?
                <span onClick={() => changeToSignIn()}> Вход</span>{" "}
              </p>
              <label className="label" htmlFor={`email`}></label>
              <Field
                className="field"
                placeholder="Введите e-mail"
                type="email"
                name="email"
              />
              <ErrorMessage className="error" name="email" component="div" />
              <label className="label" htmlFor={`name`}></label>
              <Field
                className="field"
                placeholder="Введите имя"
                type="text"
                name="name"
              />
              <ErrorMessage className="error" name="name" component="div" />
              <label className="label" htmlFor={`password`}></label>
              <Field
                className="field"
                placeholder="Введите пароль"
                type="text"
                name="password"
              />
              <ErrorMessage className="error" name="password" component="div" />
              <label className="label" htmlFor={`password2`}></label>
              <Field
                className="field"
                placeholder="Подтвердите пароль"
                type="text"
                name="password2"
              />
              <ErrorMessage
                className="error"
                name="password2"
                component="div"
              />
              <p>
                Ознакомился и согласен с{" "}
                <NavLink to="/agreement">
                  <span onClick={() => closeModal()}>
                    {" "}
                    Политикой конфиденциальности
                  </span>{" "}
                </NavLink>
              </p>
              <button type="submit" className=" submit">
                Регистрация
              </button>
              <div className="signWith">
                <img src={vk} alt="vk" />
                <img src={google} alt="vk" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default ModalSignUp;
