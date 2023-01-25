import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { URL } from "../constants/URL";
import { LoginContext } from "../contexts/LoginContext";

export default function Registry(props) {
  const { token } = useContext(LoginContext);

  const { registeredData, setRegisteredData, showEmpty, setShowEmpty } = props;

  const [showOptions, setShowOptions] = useState(false);

  const [idSelected, setIdSelected] = useState(null)


  let balance;
  let registry = [];


  if (registeredData.length > 1) {
    registry = registeredData[1];
    balance = registeredData[2].map((e) => e.subtotal);
  }


  async function deleteTransaction(id) {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const answer = await axios.delete(URL + `delete/${id}`, config);

      if (answer.data.length === 0) setShowEmpty(true);

      setRegisteredData(answer.data);
      setShowOptions(false)
    } catch (error) {
      console.log(error);
    }
  }

  function selected(id) {
    
    if (idSelected === id) {
      setIdSelected(null)
      setShowOptions(false)
    } else {
      setIdSelected(id)
      setShowOptions(true)
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
            <RegisteredDataIndividual
              key={d._id}
              onClick={() => selected(d._id)}
              id={d._id}
              idSelected={idSelected}
              className={d._id == idSelected ? "selected" : ""}
            >
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
            </RegisteredDataIndividual>
          ))}
        </RegisteredData>

        <div>
          <Options showOptions={showOptions}>
            <button id="edit">Edit</button>
            <button id="delete" onClick={() => deleteTransaction(idSelected)}>Delete</button>
          </Options>
          <Balance showEmpty={showEmpty} balance={balance}>
            <h3>Balance</h3>
            <h3 id="balance">{balance}</h3>
          </Balance>
        </div>
      </RegistryContainer>
    </>
  );
}

const RegistryContainer = styled.div`
  margin-top: 8px;
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

  div {
    width: 100%;
  }
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
  border-radius: 5px;
  padding: 0px 5px;
  box-sizing: border-box;
  border: ${(props) => (props.id == props.idSelected ? "solid 3px #a328d6;" : "none")};


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

const Options = styled.div`
  background-color: white;
  width: 100%;
  display: ${(props) => (props.showOptions ? "flex" : "none")};
  justify-content: space-between;

  button {
    width: 49%;
    border-style: none;
    color: white;
    font-family: "Raleway";
    font-size: 14px;
    font-weight: 700;
    padding: 5px;
    box-sizing: border-box;
    margin: 6px 0px;
  }

  #edit {
    background-color: #a328d6;
  }

  #delete {
    background-color: red;
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
      if (!props.balance || props.balance === 0) {
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
