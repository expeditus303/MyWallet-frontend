import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <TopBottomContainer>
          <h1>Hello, World</h1>
          <RiLogoutBoxRLine />
        </TopBottomContainer>

        <Registers>
          <div>
            <p>Não há registros de entrada ou saída</p>
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
  justify-content: center;
  align-items: center;

  div {
    width: 180px;

    p {
      font-family: "Raleway";
      font-weight: 400;
      font-size: 20px;
      text-align: center;
    }
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
