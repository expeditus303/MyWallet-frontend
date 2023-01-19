import styled from "styled-components";

export default function NewIncome() {
  return (
    <>
      <NewContainer>
        <TopContainer>
          <h1>New income</h1>
        </TopContainer>

        <Input placeholder="value" />
        <Input placeholder="description" />
        <Button>Save income</Button>
      </NewContainer>
    </>
  );
}

const NewContainer = styled.div`
  height: 100%;
  width: 326px;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
  
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
  border-style: none;
  margin-top: 15px;

  font-family: "Raleway";
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;
