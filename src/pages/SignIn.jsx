import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../constants/URL";
import { LoginContext } from "../contexts/LoginContext";

export default function SignIn() {
  
  const { token, setToken } = useContext(LoginContext);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  async function login(event) {
    event.preventDefault();

    const body = {email}

    const config = {
      headers: {
        password
      }
    }

    try {
      const answer = await axios.post(URL + "sign-in", body, config)

      success(answer)
    } catch (error) {
      alert(error.response.data)
    }

  }

  function success(answer) {
    navigate("/home")
    sessionStorage.setItem("tokenLocal", answer.data.token)
    setToken(sessionStorage.getItem("tokenLocal"))
  }

  return (
    <>
      <SignInContainer>
        <h1>MyWallet</h1>
        <form onSubmit={login}>
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
          <Button type="submit">Sign In</Button>
        </form>

        <Link to="/cadastro">
          First time? $ign Up!
        </Link>
      </SignInContainer>
    </>
  );
}

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  h1 {
    font-family: "Silkscreen", cursive;
    font-size: 32px;
    color: #ffffff;
    margin-top: 20px;
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
    margin-bottom: 20px;
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
