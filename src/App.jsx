import styled from "styled-components";
import GlobalStyle from "./assets/GlobalStyle";
import Home from "./pages/Home";
import NewExpense from "./pages/NewExpense";
import NewIncome from "./pages/NewIncome";
import SignIn from "./pages/SignIn";
import SignUP from "./pages/SignUp";


function App() {
  return (
    <>
      <GlobalStyle />
      <Body>
      {/* <SignIn /> */}
      {/* <SignUP /> */}
      <Home />
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
`