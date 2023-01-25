import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Registry from "../components/Registry";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import axios from "axios";
import { URL } from "../constants/URL";

export default function Home(props) {
  const { token, setToken } = useContext(LoginContext);

  const { registeredData, setRegisteredData } = props;

  const [showEmpty, setShowEmpty] = useState(false);

  const [userName, setUserName] = useState("")

  const navigate = useNavigate();


  useEffect(() => {

    async function getData() {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };


      try {
        const answer = await axios.get(URL + "registry", config);

        if (answer.data.length < 2) setShowEmpty(true);

        setRegisteredData(answer.data);
        
        setUserName(answer.data[0])

      } catch (error) {
        if(error.request.status === 401) {
          navigate("/")
        }

        console.log(error)
      }
    }
    getData();
  }, []);

  function exit() {
    setToken(null)
    sessionStorage.setItem("tokenLocal", null)
    navigate("/")
  }

  return (
    <>
      <HomeContainer>
        <TopBottomContainer>
          <h1>Hello, {userName}</h1>
          <a>
            <RiLogoutBoxRLine onClick={exit}/>
          </a>
        </TopBottomContainer>

        <Registry registeredData={registeredData} setRegisteredData={setRegisteredData} showEmpty={showEmpty} setShowEmpty={setShowEmpty} />

        <TopBottomContainer>
          <Link to="/nova-entrada">
            <CreateButton>
              <div>
                <AiOutlinePlusCircle id="icon" />
              </div>
              <div>New income</div>
            </CreateButton>
          </Link>

          <Link to="/nova-saida">
            <CreateButton>
              <div>
                <AiOutlinePlusCircle id="icon" />
              </div>
              <div>New expense</div>
            </CreateButton>
          </Link>
        </TopBottomContainer>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  height: 90%;
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

  a:hover {
    cursor: pointer;
  }
`;

const CreateButton = styled.button`
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
  font-family: "Raleway";
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
