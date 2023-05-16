import styled from "styled-components";

const LoginFormStyled = styled.div`
  color: #fafaf9;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form__control {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form__label {
    width: 80px;
  }

  .form__input {
    padding: 3px;
  }

  .form__button {
    margin-top: 5px;
    padding: 5px;
    width: 100px;
  }
`;

export default LoginFormStyled;
