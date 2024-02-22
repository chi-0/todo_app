import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";
import { useDispatch } from "react-redux";
import { RootState, completeTodoActions, todoActions } from "../../store/store";
import { useSelector } from "react-redux";

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

export const TodoBtn = () => {
  const dispatch = useDispatch();
  const completeTodo = useSelector((state: RootState) => state.completeTodo);

  const removeCompleteHandler = () => {
    dispatch(todoActions.removeCompleteTodo(completeTodo));
    dispatch(completeTodoActions.resetCompleteTodo());
  };

  const resetHandler = () => {
    dispatch(todoActions.resetTodo());
    dispatch(completeTodoActions.resetCompleteTodo());
  };

  return (
    <Wrap>
      <Btn onClick={removeCompleteHandler}>완료목록 삭제</Btn>
      <Btn onClick={resetHandler}>전체삭제</Btn>
    </Wrap>
  );
};
