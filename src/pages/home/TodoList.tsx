import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";
import { FC, useState } from "react";
import { Todo } from "./Home";

const ListWrap = styled.ul`
  width: 100%;
  height: 55%;
  background-color: ${COLOR_PICK.softMainColor};
  padding: 10px;
  overflow-y: auto;
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
`;

const BtnWrap = styled.div``;

const Btn = styled.button<{ $color: string }>`
  all: unset;
  cursor: pointer;
  background-color: ${(props) => props.$color};
  padding: 12px;
  margin-left: 5px;
`;

export const TodoList: FC<{
  todoList: Todo[];
  removeHandler: (id: string) => void;
}> = ({ todoList, removeHandler }) => {
  const [complete, setComplete] = useState<string[]>([]);

  const checkHandler = (id: string) => {
    if (!complete.includes(id)) {
      setComplete((prev) => [...prev, id]);
    } else {
      setComplete((prev) => prev.filter((i) => i !== id));
    }
  };

  return (
    <ListWrap>
      {todoList.map((data) => (
        <TodoItem key={data.id} $complete={complete.includes(data.id)}>
          <p>{data.text}</p>
          <BtnWrap>
            <Btn
              type="button"
              $color={COLOR_PICK.navyColor}
              onClick={() => checkHandler(data.id)}
            >
              {complete.includes(data.id) ? "취소" : "완료"}
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
