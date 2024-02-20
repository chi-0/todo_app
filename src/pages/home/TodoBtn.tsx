import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";
import { FC } from "react";

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Btn = styled.button`
  all: unset;
  padding: 5px 20px;
  background-color: ${COLOR_PICK.redColor};
  margin-left: 10px;
  cursor: pointer;
`;

export const TodoBtn: FC<{
  resetHandler: () => void;
  removeCompleteTodo: () => void;
}> = ({ resetHandler, removeCompleteTodo }) => {
  return (
    <Wrap>
      <Btn onClick={removeCompleteTodo}>완료목록 삭제</Btn>
      <Btn onClick={resetHandler}>전체삭제</Btn>
    </Wrap>
  );
};
