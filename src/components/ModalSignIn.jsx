import React from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";
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

const ModalSignIn = ({
  modalSignInActive,
  setModalSignInActive,
  setModalSignUpActive,
}) => {
  function closeModal() {
    setModalSignInActive(false);
  }
  let changeToSingUp = () => {
    closeModal();
    setModalSignUpActive(true);
  };
  const initialValues = {
    email: "",
    passwod: "",
    id: Date.now(),
  };
  return (
    <Modal
      isOpen={modalSignInActive}
      onRequestClose={closeModal}
      style={customStylesModal}
      ariaHideApp={false}
    >
      <div className="contentModal" onClick={(e) => e.stopPropagation()}>
        <img onClick={closeModal} src={x} alt="close" />
        <h2>Вход</h2>
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
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            closeModal();
          }}
        >
          {({ values }) => (
            <Form className="form">
              <p>
                У вас еще нет аккаунта?
                <span onClick={() => changeToSingUp()}> Регистрация</span>{" "}
              </p>
              <label className="label" htmlFor={`email`}></label>
              <Field
                className="field"
                placeholder="Введите e-mail"
                type="email"
                name="email"
              />
              <ErrorMessage className="error" name="email" component="div" />
              <label className="label" htmlFor={`password`}></label>
              <Field
                className="field"
                placeholder="Введите пароль"
                type="text"
                name="password"
              />
              <ErrorMessage className="error" name="password" component="div" />
              <p>
                Забыли пароль?<span> Восстановить</span>{" "}
              </p>
              <button type="submit" className=" submit">
                Войти
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

export default ModalSignIn;
