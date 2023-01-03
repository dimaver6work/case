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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const ModalSignUp = () => {
  const auth = getAuth();
  const handleReg = () => {};
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return <div></div>;
};

export default ModalSignUp;
