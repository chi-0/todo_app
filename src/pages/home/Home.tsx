import { Container } from "../../ui/Container";
import { CurrentDate } from "./CurrentDate";
import { CompleteMessage } from "./CompleteMessage";
import { TodoForm } from "./TodoForm";

export const Home = () => {
  return (
    <Container>
      <CurrentDate />
      <CompleteMessage />
      <TodoForm />
    </Container>
  );
};
