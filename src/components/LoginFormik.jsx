import React from 'react';
import { useFormik } from 'formik';
import styles from "./login.module.css";


const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Обязательное поле';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Длина 15 символов или менее';
  }

  if (!values.lastName) {
    errors.lastName = 'Обязательное поле';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Длина 20 символов или менее';
  }

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Невалидный адрес почты';
  }

  if (!values.password) {
    errors.password = 'Обязательное поле';
  } else if (values.lastName.password < 7) {
    errors.password = 'пароль слишком короткий не менее 7 символов';
  }

  return errors;
};

const FormikLogin = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <label htmlFor="firstName">Фамилия</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <br/>
      <label htmlFor="lastName">Имя</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <br/>
      <label htmlFor="email">Ящик</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <br/>
      <label htmlFor="password">Пароль</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormikLogin;
