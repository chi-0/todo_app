import { FC, useState } from "react";
import styled from "styled-components";
import { COLOR_PICK } from "../style/colorPick";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  position: relative;
  z-index: 99;
`;

const HeaderWrap = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  position: relative;
  z-index: 99;

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

const NavWrap = styled.div<{ $visibility: string }>`
  position: absolute;
  top: 60px;
  left: -12px;
  width: 600px;
  height: calc(100vh - 84px);
  z-index: 10;
  backdrop-filter: brightness(55%) blur(5px);
  visibility: ${(props) => props.$visibility};
  transition: 0.1s;
`;

const Nav = styled.div<{
  $height: string;
  $overflow: string;
  $padding: string;
}>`
  background-color: ${COLOR_PICK.darkColor};
  padding: ${(props) => props.$padding} 0;
  overflow: hidden;
  max-height: ${(props) => props.$height};
  transition: 0.3s;

  a {
    display: block;
    color: ${COLOR_PICK.textColor};
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    font-weight: 500;
  }
  a:hover {
    background-color: ${COLOR_PICK.mainColor};
    color: ${COLOR_PICK.darkColor};
  }
`;

export const Header: FC<{ text: string }> = ({ text }) => {
  const [isValid, setIsValid] = useState(true);

  const navHandler = () => {
    isValid ? setIsValid(false) : setIsValid(true);
  };

  return (
    <Wrap>
      <HeaderWrap>
        <h3>{text}</h3>
        <BarBtn type="button" onClick={navHandler}>
          <Bar />
          <Bar />
          <Bar />
        </BarBtn>
      </HeaderWrap>
      <NavWrap $visibility={isValid ? "hidden" : "visible"}>
        <Nav
          $height={isValid ? "0" : "172.8px"}
          $overflow={isValid ? "hidden" : "visible"}
          $padding={isValid ? "0" : "18px"}
        >
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Portal"}>Portal</Link>
            </li>
            <li>
              <Link to={"/Ent"}>Entertainment</Link>
            </li>
          </ul>
        </Nav>
      </NavWrap>
    </Wrap>
  );
};
