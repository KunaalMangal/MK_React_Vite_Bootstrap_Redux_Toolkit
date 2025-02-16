import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { onLogin } from "../../../store/slices/AuthSlice";

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (!email || !password) {
      alert("Please enter valid credentials!");
    } else {
      dispatch(
        onLogin({
          currentUser: {
            email: email,
            password: password,
          },
          token: "123",
          isLogin: true,
          deviceToken: "321"
        })
      );
    }
  };

  return (
    <Container>
      <h1>Welcome to Opensource.</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </Container>
  );
};
