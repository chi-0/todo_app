import { FC, ReactNode } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  padding: 15px 5%;
`;

const InnerWrap = styled.div`
  width: 520px;
  height: 700px;
  background-color: #262626;
  margin: 0 auto;
  border-radius: 15px;
`;

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrap>
      <InnerWrap>{children}</InnerWrap>
    </Wrap>
  );
};
