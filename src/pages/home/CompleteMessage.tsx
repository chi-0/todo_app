import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";
import { FC } from "react";

const CompleteM = styled.p`
  font-size: 20px;
  margin-bottom: 10px;

  > span {
    color: ${COLOR_PICK.yellowColor};
    font-size: 20px;
  }
  > span:last-child {
    font-size: 22px;
    font-weight: 500;
  }
`;

export const CompleteMessage: FC<{
  todoLength: number;
  completeLength: number;
}> = ({ todoLength, completeLength }) => {
  return (
    <CompleteM>
      <span>{todoLength}개</span> 중 <span>{completeLength}개</span>를
      완료했어요👍
    </CompleteM>
  );
};
