import styled from "styled-components";

export default function IndividualData(props) {

    const { registry, selected, showBorder } = props

  return (
    <RegisteredData>
      {registry.map((d) => (
        <RegisteredDataIndividual
          key={d._id}
          onClick={() => selected(d._id)}
          showBorder={showBorder}
        >
          <div>
            <p id="date">{d.date}</p>
            <p id="description">{d.description}</p>
          </div>
          <p id="value" className={d.type == "income" ? "income" : "expense"}>
            {d.value}
          </p>
        </RegisteredDataIndividual>
      ))}
    </RegisteredData>
  );
}

const RegisteredData = styled.div`
  width: 100%;
  font-size: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

const RegisteredDataIndividual = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 20px;
  margin-bottom: 15px;
  font-size: 16px;
  word-wrap: break-word;
  border-radius: 5px;
  padding: 0px 5px;
  box-sizing: border-box;
  border: ${(props) => (props.showBorder ? "solid 2px #a328d6;" : "none")};

  div {
    display: flex;
  }

  p#date {
    width: 48px;
    color: #9c9a9a;
  }

  p#description {
    color: #000000;
    width: 156px;
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

  button {
    width: 15px;
    border: none;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
    color: #c6c6c6;
  }
`;
