import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";

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
  return (
    <Wrap>
      <Btn>완료목록 삭제</Btn>
      <Btn>전체삭제</Btn>
    </Wrap>
  );
};
