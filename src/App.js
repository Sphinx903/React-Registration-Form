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
    return value.includes('@') || 'Email must contain @ symbol';
  };

  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("name")}
        />
         <input
        type="email"
        placeholder="Enter your email"
        {...register("email", { required: "Email is required", validate: validateEmail })}
      />
      {/* Display email validation error message */}
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Enter a password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message:
                "Password must contain at least one special character, one number, one uppercase and one lowercase letter, and be at least 8 characters long",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
export default App;
