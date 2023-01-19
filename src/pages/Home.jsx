import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function Home() {
  const DATA = [
    {
      date: "16/01",
      description: "Parafina",
      value: 12.50,
    },
    {
      date: "17/01",
      description: "Estacionamento joaca",
      value: 18,
    },
    {
      date: "18/01",
      description: "Almoço mãe",
      value: 39.9,
    }
  ];

  return (
    <>
      <HomeContainer>
        <TopBottomContainer>
          <h1>Hello, World</h1>
          <RiLogoutBoxRLine />
        </TopBottomContainer>

        {/* <Registers>
          <div id="empty">
            <p>Não há registros de entrada ou saída</p>
          </div>
        </Registers> */}

        <Registers>
          <div>
            {DATA.map((d) => (
            <RegisteredData>
              <p>{d.date}</p>
              <p id="description">{d.description}</p>
              <p>{d.value}</p>
            </RegisteredData>
            ))}
          </div>
        </Registers>

        <TopBottomContainer>
          <NewInOutButton>
            <div>
              <AiOutlinePlusCircle id="icon" />
            </div>
            <div>New income</div>
          </NewInOutButton>

          <NewInOutButton>
            <div>
              <AiOutlineMinusCircle id="icon" />
            </div>
            <div>New expense</div>
          </NewInOutButton>
        </TopBottomContainer>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  height: 100%;
  width: 326px;
  margin-top: 25px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: "Raleway";
  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
`;

const Registers = styled.div`
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

  div#empty {
    width: 180px;

    p {
      font-family: "Raleway";
      font-weight: 400;
      font-size: 20px;
      text-align: center;
    }
  }

  div {
    width: 100%;
    background-color: blue;
    justify-content: space-between;
  }
`;

const RegisteredData = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: deeppink;

  p#description{
    background-color: aqua;
    width: 100%;
  }
`;

const NewInOutButton = styled.button`
  margin-top: 15px;
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  border-style: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  font-family: "Raleway";
  font-weight: 700;
  font-size: 17px;

  color: #ffffff;

  div {
    display: flex;
    width: 64px;
    text-align: left;
    margin-left: 10px;
  }

  #icon {
    font-size: 25px;
  }
`;
