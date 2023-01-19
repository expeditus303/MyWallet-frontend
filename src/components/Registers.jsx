import styled from "styled-components";

export default function Registers(props) {

  const { DATA } = props

  return (
    <>
      <RegistersContainer>
        {/* <EmptyRegisters>
          <div>
            <p>There are no income or expense records</p>
          </div>
        </EmptyRegisters> */}

        <RegisteredData>
          {DATA.map((d) => (
            <RegisteredDataIndividual>
              <div>
                <p id="date">{d.date}</p>
                <p id="description">{d.description}</p>
              </div>
              <p id="value" className={d.type == "income" ? "income" : "expense"}>{d.value.toFixed(2)}</p>
            </RegisteredDataIndividual>
          ))}
        </RegisteredData>

        <Balance>
          <h3>Balance</h3>
          <h3>$2849.96</h3>
        </Balance>
      </RegistersContainer>
    </>
  );
}

const RegistersContainer = styled.div`
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

const EmptyRegisters = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b5282;

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

  div {
    display: flex;
  }

  p#date {
    width: 48px;
    color: #9c9a9a;
  }

  p#description {
    color: #000000;
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
  display: flex;
  justify-content: space-between;
`;
