import { useState } from "react";
const FormObject = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormValues = (event) => {
    
    setFormValues({...formValues, [event.target.id]: event.target.value});
  };
  const handleSubmit = (e) => {
    const {username, password,email} = formValues
    e.preventDefault();
    alert(`username${formValues.username}
  email:${formValues.email}
  password:${formValues.password}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: <span className="text-danger">{formValues.username}</span>
          </label>
          <input
            onChange={handleFormValues}
            value={formValues.username}
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address: <span className="text-danger">{formValues.email}</span>
          </label>
          <input
            onChange={handleFormValues}
            value={formValues.email}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={handleFormValues}
            value={formValues.password}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormObject;
