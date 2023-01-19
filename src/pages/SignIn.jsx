import styled from "styled-components";

export default function SignIn() {
  return (
    <>
      <SignInContainer>
        <h1>MyWallet</h1>
        <Input placeholder="e-mail" />
        <Input placeholder="password" />
        <Button>Sign In</Button>

        <p>First time? $ign Up!</p>
      </SignInContainer>
    </>
  );
}

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;

  h1 {
    font-family: "Silkscreen", cursive;
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  p {
    margin-top: 35px;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
`;

const Input = styled.input`
  width: 326px;
  height: 58px;
  background: #ffffff;
  border-radius: 5px;
  border-style: none;
  margin-top: 15px;
  padding-left: 15px;
  box-sizing: border-box;

  ::placeholder {
    font-family: "Raleway";
    font-size: 20px;
    color: #4f4f4f;
  }

  :focus::placeholder {
    color: transparent;
  }
`;

const Button = styled.button`
  width: 326px;
  height: 46px;
  border-style: none;
  background: #a328d6;
  border-radius: 5px;
  margin-top: 15px;

  font-family: "Raleway";
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;
