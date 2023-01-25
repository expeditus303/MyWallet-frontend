import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./assets/GlobalStyle";
import { LoginContext } from "./contexts/LoginContext";
import Home from "./pages/Home";
import NewExpense from "./pages/NewExpense";
import NewIncome from "./pages/NewIncome";
import SignIn from "./pages/SignIn";
import SignUP from "./pages/SignUp";

import { DATA_REGISTERS } from "./DATA";

function App() {
  const [registeredData, setRegisteredData] = useState([]);

  const [token, setToken] = useState(sessionStorage.getItem("tokenLocal"));


  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Body>
          <LoginContext.Provider value={{ token, setToken }}>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/cadastro" element={<SignUP />} />
              <Route
                path="/home"
                element={<Home registeredData={registeredData} setRegisteredData={setRegisteredData}/>}
              />
              <Route
                path="/nova-entrada"
                element={
                  <NewIncome
                    registeredData={registeredData}
                    setRegisteredData={setRegisteredData}
                  />
                }
              />
              <Route
                path="/nova-saida"
                element={
                  <NewExpense
                    registeredData={registeredData}
                    setRegisteredData={setRegisteredData}
                  />
                }
              />
            </Routes>
          </LoginContext.Provider>
        </Body>
      </BrowserRouter>
    </>
  );
}

export default App;

const Body = styled.div`
  height: 100vh;
  /* width: 375px; */
  width: 100%;
  margin: auto;
  background-color: #8c11be;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Raleway";

  a {
    text-decoration: none;
  }

  button:hover {
    cursor: pointer;
  }
`;
