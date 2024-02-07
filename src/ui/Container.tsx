import { FC, ReactNode } from "react";
import styled from "styled-components";
import { COLOR_PICK } from "../style/colorPick";

const Wrap = styled.div`
  width: 100%;
  padding: 0 5%;
`;

const InnerWrap = styled.div`
  width: 600px;
  height: 100vh;
  background-color: ${COLOR_PICK.darkColor};
  margin: 0 auto;
  padding: 12px;
`;

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrap>
      <InnerWrap>{children}</InnerWrap>
    </Wrap>
  );
};
