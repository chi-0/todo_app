import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";
import { useDispatch } from "react-redux";
import { RootState, completeTodoActions, todoActions } from "../../store/store";
import { useSelector } from "react-redux";

const ListWrap = styled.ul`
  width: 100%;
  height: 55%;
  background-color: ${COLOR_PICK.softMainColor};
  padding: 10px;
  overflow-y: auto;
  margin-bottom: 8px;

  @media screen and (max-width: 600px) {
    height: 340px;
  }
`;

const TodoItem = styled.li<{ $complete: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  > p {
    width: 79%;
    background-color: ${(props) =>
      props.$complete ? "#acacac" : COLOR_PICK.mainColor};
    padding: 12px;
    text-decoration: ${(props) => (props.$complete ? "line-through" : "none")};
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 8px;

    > p {
      width: 100%;
      padding: 8px;
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const Btn = styled.button<{ $color: string }>`
  all: unset;
  cursor: pointer;
  background-color: ${(props) => props.$color};
  padding: 12px;
  margin-left: 5px;

  @media screen and (max-width: 600px) {
    padding: 11px;
    font-size: 14px;
  }
`;

export const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo);
  const complete = useSelector((state: RootState) => state.completeTodo);

  const checkHandler = (id: string) => {
    if (!complete.some((obj) => obj.id === id)) {
      dispatch(completeTodoActions.completeTodo(id));
    } else {
      dispatch(completeTodoActions.deleteCompleteTodo(id));
    }
  };

  const removeHandler = (id: string) => {
    dispatch(todoActions.removeTodo(id));
    dispatch(completeTodoActions.removeCompleteTodo(id));
  };

  return (
    <ListWrap>
      {todo.map((data) => (
        <TodoItem
          key={data.id}
          $complete={complete.some((obj) => obj.id === data.id)}
        >
          <p>{data.text}</p>
          <BtnWrap>
            <Btn
              type="button"
              $color={COLOR_PICK.navyColor}
              onClick={() => checkHandler(data.id)}
            >
              {complete.some((obj) => obj.id === data.id) ? "취소" : "완료"}
            </Btn>
            <Btn
              type="button"
              $color={COLOR_PICK.redColor}
              onClick={() => removeHandler(data.id)}
            >
              삭제
            </Btn>
          </BtnWrap>
        </TodoItem>
      ))}
    </ListWrap>
  );
};
