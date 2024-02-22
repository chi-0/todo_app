import { Container } from "../../ui/Container";
import { CurrentDate } from "./CurrentDate";
import { CompleteMessage } from "./CompleteMessage";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoBtn } from "./TodoBtn";

export const Home = () => {
  return (
    <Container>
      <CurrentDate />
      <CompleteMessage />
      <TodoForm />
      <TodoList />
      <TodoBtn />
    </Container>
  );
};
