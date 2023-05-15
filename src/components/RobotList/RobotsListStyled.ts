import styled from "styled-components";

const RobotsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default RobotsListStyled;
