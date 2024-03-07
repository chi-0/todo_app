import styled from "styled-components";
import { Container } from "../../ui/Container";
import { Link } from "react-router-dom";
import { Wavve } from "./img/Wavve";
import { Tving } from "./img/Tving";
import { Netflix } from "./img/Netflix";
import { Disney } from "./img/Disney";
import { Watcha } from "./img/Watcha";

const Con = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px 10px;
`;

export const Ent = () => {
  return (
    <Container>
      <Con>
        <Link to="https://www.wavve.com/" target="_blank">
          <Wavve />
        </Link>
        <Link to="https://www.tving.com/" target="_blank">
          <Tving />
        </Link>
        <Link to="https://www.netflix.com/" target="_blank">
          <Netflix />
        </Link>
        <Link
          to="https://www.disneyplus.com/"
          target="_blank"
          style={{ transform: "translateY(-25px)" }}
        >
          <Disney />
        </Link>
        <Link to="https://watcha.com/" target="_blank">
          <Watcha />
        </Link>
      </Con>
    </Container>
  );
};
