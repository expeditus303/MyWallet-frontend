import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../constants/URL";

export default function SignUP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function register(event) {
    event.preventDefault();

    const body = {
      name,
      email
    };

    const config = {
      headers: {
        password,
        confirmPassword
      }
    }

    try {
      await axios.post(URL + "sign-up", body, config);

      alert(`Welcome to MyWallet ${name}!`);

      navigate("/");
    } catch (error) {
      alert(error.response.data)
    }
  }

  return (
    <>
      <SignUpContainer>
        <h1>MyWallet</h1>
        <form onSubmit={register}>
          <Input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            name="confirm-password"
            placeholder="confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button>Sign Up</Button>
        </form>

        <Link to="/">
          Already have an account? $ign In!
        </Link>
      </SignUpContainer>
    </>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;

  h1 {
    font-family: "Silkscreen", cursive;
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    margin-top: 35px;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
`;

const Input = styled.input`
  width: 326px;
  height: 58px;
  background: #ffffff;
  border-radius: 5px;
  border-style: none;
  margin-top: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 20px;
  font-family: "Raleway";

  ::placeholder {
    font-family: "Raleway";
    font-size: 20px;
    color: #4f4f4f;
  }

  :focus::placeholder {
    color: transparent;
  }

`;

const Button = styled.button`
  width: 326px;
  height: 46px;
  border-style: none;
  background: #a328d6;
  border-radius: 5px;
  margin-top: 15px;

  font-family: "Raleway";
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;
