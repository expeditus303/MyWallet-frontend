import styled from "styled-components";
import GlobalStyle from "./assets/GlobalStyle";
import Home from "./pages/Home";
import NewExpense from "./pages/NewExpense";
import NewIncome from "./pages/NewIncome";
import SignIn from "./pages/SignIn";
import SignUP from "./pages/SignUp";


function App() {

  const DATA = [
    {
      date: "16/01",
      description: "Parafina",
      value: 12.5,
      type: "expense",
    },
    {
      date: "17/01",
      description: "Estacionamento joaca",
      value: 18.0,
      type: "expense",
    },
    {
      date: "18/01",
      description: "Salário",
      value: 30000.0,
      type: "income",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Body>
      {/* <SignIn /> */}
      {/* <SignUP /> */}
      <Home DATA={DATA}/>
      {/* <NewIncome /> */}
      {/* <NewExpense /> */}
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  height: 100vh;
  width: 375px;
  /* width: 100%; */
  margin: auto;
  background-color: #8C11BE;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Raleway";
`