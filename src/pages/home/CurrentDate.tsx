import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";

const Today = styled.p`
  font-size: 28px;
  margin-bottom: 20px;

  > span {
    color: ${COLOR_PICK.mainColor};
  }
`;

export const CurrentDate = () => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  return (
    <Today>
      오늘은{" "}
      <span>
        {todayMonth}월 {todayDay}일
      </span>{" "}
      입니다.
    </Today>
  );
};
