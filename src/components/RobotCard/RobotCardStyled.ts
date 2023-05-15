import styled from "styled-components";

const RobotCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #fafaf9;
  align-items: center;
  border-radius: 5px;
  padding-bottom: 3px;
  max-width: 256px;

  .robot-card__image {
    object-fit: cover;
  }

  .robot-card__points {
    display: flex;
    gap: 40px;
  }
`;

export default RobotCardStyled;
