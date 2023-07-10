import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormikForm = ({formSubmit, closeForm}) => {
  return (
    <Formik
      initialValues={{   name:'', email: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),

        email: Yup.string().email('Invalid email address').required('Required'),
      })}

      onSubmit={(values, { setSubmitting }) => {
formSubmit(values)
closeForm()
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
        <label>
          Name:
          <input value={formik.values.name} onChange={formik.handleChange} type="text" name="name"/>
        </label>
        <label>
          Email:
          <input value={formik.values.email} onChange={formik.handleChange} type="email" name="email"/>
        </label>
        <button type="submit">Save</button>
              </form>
      )}
    </Formik>
  );
};

export default FormikForm;