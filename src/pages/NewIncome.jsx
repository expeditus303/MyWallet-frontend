import { dblClick } from "@testing-library/user-event/dist/click";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../constants/URL";
import { LoginContext } from "../contexts/LoginContext";

export default function NewIncome(props) {
  const { token } = useContext(LoginContext);

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate()

  async function sendNewIncome(event) {
    event.preventDefault();

    const daysjs = require("dayjs");

    const today = (daysjs().format("DD-MM"))

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const newIncome = {
      date: today,
      description: description,
      value: Number(value),
      type: "income",
    };

    try {
      await axios.post(URL + "new-transaction", newIncome, config)
    } catch (error) {
      
    }

    navigate("/home")
  }

  return (
    <>
      <NewContainer>
        <TopContainer>
          <h1>New income</h1>
        </TopContainer>
        <form onSubmit={sendNewIncome}>
          <Input
            type="number"
            name="value"
            placeholder="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Input
            type="text"
            name="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit">Save income</Button>
        </form>
      </NewContainer>
    </>
  );
}

const NewContainer = styled.div`
  height: 100%;
  width: 326px;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
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

  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  [type="number"] {
    -moz-appearance: textfield;
  }

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
  border-style: none;
  margin-top: 15px;

  font-family: "Raleway";
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;
