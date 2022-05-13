import { useFormik } from 'formik';
import React, { useContext } from 'react';
import './App.css';
import UserContext from './Usercontext';
function CreateUser() {
  const useData = useContext(UserContext);

  let formik = useFormik({
    initialValues: {
      name: '',
      position: '',
      office: '',
      age: 0,
      startDate: '',
      salary: 0,
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Name can not be blank';
      }

      if (!values.age || values.age < 18) {
        errors.age = 'Age is required and should be greater than 18';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      useData.setUsers([...useData.users, values]);
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        {JSON.stringify(formik.values)}
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type={'text'}
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
              style={{
                border: formik.errors.name ? '1px solid red' : '',
                border: formik.values.name !== '' ? '1px solid green' : '',
              }}
            />
            <span style={{ color: 'red' }}>{formik.errors.name}</span>
          </div>
          <div className="col-lg-6">
            <label>Position</label>
            <input
              type={'text'}
              className="form-control"
              name="position"
              onChange={formik.handleChange}
              value={formik.values.position}
            />
          </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input
              type={'text'}
              className="form-control"
              name="office"
              onChange={formik.handleChange}
              value={formik.values.office}
            />
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type={'number'}
              className="form-control"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {formik.errors.age}
          </div>
          <div className="col-lg-6">
            <label>Start Date</label>
            <input
              type={'date'}
              className="form-control"
              name="startDate"
              onChange={formik.handleChange}
              value={formik.values.startDate}
            />
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              type={'number'}
              className="form-control"
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
            />
          </div>
          <div className="col-lg-6 mt-3">
            <input
              disabled={Object.keys(formik.errors).length !== 0}
              type={'submit'}
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
      <pre>{JSON.stringify(formik.errors)}</pre>
    </div>
  );
}

export default CreateUser;
