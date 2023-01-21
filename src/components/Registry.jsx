import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Registry(props) {

  const { registeredData } = props

  const [showEmpty, setShowEmpty] = useState(false)

  console.log(showEmpty)


  return (
    <>
      <RegistryContainer>
        <EmptyRegistry showEmpty={showEmpty}>
          <div>
            <p>There are no income or expense registers</p>
          </div>
        </EmptyRegistry>

        <RegisteredData>
          {registeredData.map((d) => (
            <RegisteredDataIndividual key={d.description}>
              <div>
                <p id="date">{d.date}</p>
                <p id="description">{d.description}</p>
              </div>
              <p id="value" className={d.type == "income" ? "income" : "expense"}>{d.value.toFixed(2)}</p>
            </RegisteredDataIndividual>
          ))}
        </RegisteredData>

        <Balance showEmpty={showEmpty}>
          <h3>Balance</h3>
          <h3>2849.96</h3>
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
    width: 176px;
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
`;

const Balance = styled.div`
  width: 100%;
  display: ${(props) => (!props.showEmpty ? "flex" : "none")};
  justify-content: space-between;

  .positive { 
    color: green;
  }
`;
