import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";

const ListWrap = styled.ul`
  width: 100%;
  height: 55%;
  background-color: ${COLOR_PICK.softMainColor};
  padding: 10px;
`;

const TodoItem = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;

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

export const TodoList = () => {
  return (
    <ListWrap>
      <TodoItem>
        <p>코딩 하기~!</p>
        <BtnWrap>
          <Btn type="button" $color={COLOR_PICK.navyColor}>
            완료
          </Btn>
          <Btn type="button" $color={COLOR_PICK.redColor}>
            삭제
          </Btn>
        </BtnWrap>
      </TodoItem>
    </ListWrap>
  );
};
