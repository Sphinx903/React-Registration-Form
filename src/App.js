import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const validateEmail = (value) => {
    return value.includes("@") || "Email must contain @ symbol";
  };

  return (
    <div className="container">
      <h1 className="title">Registration Form</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your username"
            {...register("name", { required: "Username is required" })}
            className={`form-input ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              validate: validateEmail,
            })}
            className={`form-input ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Enter a password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Password must contain at least one special character, one number, one uppercase and one lowercase letter, and be at least 8 characters long",
              },
            })}
            className={`form-input ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
