import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { URL } from "../constants/URL";
import { LoginContext } from "../contexts/LoginContext";

export default function Registry(props) {
  const { token } = useContext(LoginContext);

  const { registeredData, setRegisteredData, showEmpty, setShowEmpty } = props;

  let balance;
  let registry = [];

  if (registeredData.length > 1) {
    registry = registeredData[1];
    balance = registeredData[2].map((e) => e.subtotal);
  }

  async function deleteTransaction(id) {

    const config = {
      headers: {
        authorization: `Bearer ${token}`
      }
    };


    try {
      const answer = await axios.delete(URL + `delete/${id}`, config);

      if (answer.data.length === 0) setShowEmpty(true);

      setRegisteredData(answer.data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <RegistryContainer>
        <EmptyRegistry showEmpty={showEmpty}>
          <div>
            <p>There are no income or expense registers</p>
          </div>
        </EmptyRegistry>

        <RegisteredData>
          {registry.map((d) => (
            <RegisteredDataIndividual key={d._id}>
              <div>
                <p id="date">{d.date}</p>
                <p id="description">{d.description}</p>
              </div>
              <p
                id="value"
                className={d.type == "income" ? "income" : "expense"}
              >
                {d.value}
              </p>
              <button onClick={() => deleteTransaction(d._id)}>x</button>
            </RegisteredDataIndividual>
          ))}
        </RegisteredData>

        <Balance showEmpty={showEmpty} balance={balance}>
          <h3>Balance</h3>
          <h3 id="balance">{balance}</h3>
        </Balance>
      </RegistryContainer>
    </>
  );
}

const RegistryContainer = styled.div`
  margin-top: 22px;
  width: 100%;
  height: 446px;
  border-radius: 5px;
  border-style: none;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 23px 15px 10px;
  box-sizing: border-box;
`;

const EmptyRegistry = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.showEmpty ? "flex" : "none")};

  div {
    width: 200px;

    p {
      font-weight: 400;
      font-size: 20px;
      text-align: center;
    }
  }
`;

const RegisteredData = styled.div`
  width: 100%;
  font-size: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

const RegisteredDataIndividual = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 20px;
  margin-bottom: 15px;
  font-size: 16px;
  word-wrap: break-word;

  div {
    display: flex;
  }

  p#date {
    width: 48px;
    color: #9c9a9a;
  }

  p#description {
    color: #000000;
    width: 156px;
  }

  p#value {
    width: 72px;
    text-align: right;
  }

  p.expense {
    color: red;
  }

  p.income {
    color: green;
  }

  button {
    width: 15px;
    border: none;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
    color: #c6c6c6;
  }
`;

const Balance = styled.div`
  width: 100%;
  display: ${(props) => (!props.showEmpty ? "flex" : "none")};
  justify-content: space-between;
  font-weight: 700;
  margin-top: 8px;
  #balance {
    color: ${(props) => {
      if (!props.balance) {
        return "black";
      } else if (props.balance < 0) {
        return "red";
      } else {
        return "green";
      }
    }};
  }

  .positive {
    color: green;
  }
`;
