import { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { COLOR_PICK } from "../style/colorPick";
import { Header } from "../components/Header";
import { useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();
  const [naming, setNaming] = useState("");

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

  useEffect(() => {
    headerNaming();
  }, [pathname]);

  return (
    <Wrap>
      <InnerWrap>
        <Header text={naming} />
        {children}
      </InnerWrap>
    </Wrap>
  );
};
