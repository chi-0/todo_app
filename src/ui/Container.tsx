import { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { COLOR_PICK } from "../style/colorPick";
import { Header } from "../components/Header";
import { useLocation } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
`;

const InnerWrap = styled.div`
  width: 600px;
  height: 100vh;
  background-color: ${COLOR_PICK.darkColor};
  margin: 0 auto;
  padding: 12px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const [naming, setNaming] = useState("");

  useEffect(() => {
    const headerNaming = () => {
      if (pathname === "/") {
        setNaming("TODO");
      } else if (pathname === "/Portal") {
        setNaming("PORTAL");
      } else if (pathname === "/Ent") {
        setNaming("ENT");
      } else {
        setNaming("404");
      }
    };

    headerNaming();
  }, [pathname, setNaming]);

  return (
    <Wrap>
      <InnerWrap>
        <Header text={naming} />
        {children}
      </InnerWrap>
    </Wrap>
  );
};
