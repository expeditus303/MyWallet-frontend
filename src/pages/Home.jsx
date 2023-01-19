import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Registers from "../components/Registers";

export default function Home(props) {

  const { DATA } = props

  return (
    <>
      <HomeContainer>
        <TopBottomContainer>
          <h1>Hello, World</h1>
          <RiLogoutBoxRLine />
        </TopBottomContainer>

        <Registers DATA={DATA}/>

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

  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
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
