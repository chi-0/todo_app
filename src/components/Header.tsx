import { FC } from "react";
import styled from "styled-components";
import { COLOR_PICK } from "../style/colorPick";

const HeaderWrap = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid white;
  margin-bottom: 20px;

  > h3 {
    font-size: 36px;
    font-weight: 500;
  }
`;

const BarBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-56%);
`;

const Bar = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${COLOR_PICK.textColor};

  &:nth-child(2) {
    margin: 5px 0;
  }
`;

export const Header: FC<{ text: string }> = ({ text }) => {
  return (
    <HeaderWrap>
      <h3>{text}</h3>
      <BarBtn type="button">
        <Bar />
        <Bar />
        <Bar />
      </BarBtn>
    </HeaderWrap>
  );
};
