import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 20px;

  > label {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Input = styled.input`
  all: unset;
  width: 480px;
  height: 60px;
  padding: 0 13px;
  background-color: ${COLOR_PICK.textColor};
  color: ${COLOR_PICK.darkColor};
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;

  &::placeholder {
    font-weight: 300;
  }
`;

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  height: 60px;
  padding: 0 10px;
  background-color: ${COLOR_PICK.mainColor};
  box-sizing: border-box;
  font-size: 18px;
`;

export const TodoForm = () => {
  return (
    <Form id="todoForm">
      <label htmlFor="todoText" />
      <Input
        id="todoText"
        type="text"
        placeholder="오늘 해야할 일은?"
        autoComplete="off"
      />
      <Btn type="submit">추가하기</Btn>
    </Form>
  );
};
