import styled from "styled-components";
import { Container } from "../../ui/Container";
import { GoogleSvg } from "./img/GoogleSvg";
import naverLogo from "./img/naverLogo.png";
import { Link } from "react-router-dom";
import { DaumSvg } from "./img/DaumSvg";

const Con = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px 10px;

  @media screen and (max-width: 600px) {
    padding: 20px 5px;
  }
`;

export const Portal = () => {
  return (
    <Container>
      <Con>
        <Link to="https://www.naver.com/" target="_blank">
          <img width="50px" src={naverLogo} alt="naver" />
        </Link>
        <Link to="https://www.google.co.kr/" target="_blank">
          <GoogleSvg />
        </Link>
        <Link to="https://www.daum.net/" target="_blank">
          <DaumSvg />
        </Link>
      </Con>
    </Container>
  );
};
