import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";
import { FC, MouseEvent, useRef } from "react";
import { Todo } from "./Home";

const ListWrap = styled.ul`
  width: 100%;
  height: 55%;
  background-color: ${COLOR_PICK.softMainColor};
  padding: 10px;
  overflow-y: auto;
`;

const TodoItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  > p {
    width: 79%;
    background-color: ${COLOR_PICK.mainColor};
    padding: 12px;
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

export const TodoList: FC<{ todoList: Todo[] }> = ({ todoList }) => {
  const textRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const { current: textCurrent } = textRef;

  const checkHandler = (index: number) => {
    textCurrent[index]!.style.textDecoration = "line-through";
  };

  return (
    <ListWrap>
      {todoList.map((data, index) => (
        <TodoItem key={data.id}>
          <p ref={(el) => (textRef.current[index] = el)}>{data.text}</p>
          <BtnWrap>
            <Btn
              type="button"
              $color={COLOR_PICK.navyColor}
              onClick={() => checkHandler(index)}
            >
              완료
            </Btn>
            <Btn type="button" $color={COLOR_PICK.redColor}>
              삭제
            </Btn>
          </BtnWrap>
        </TodoItem>
      ))}
    </ListWrap>
  );
};
