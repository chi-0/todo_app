import { Container } from "../../ui/Container";
import { CurrentDate } from "./CurrentDate";
import { CompleteMessage } from "./CompleteMessage";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <Container>
      <Header text="TODO" />
      <CurrentDate />
      <CompleteMessage />
      <TodoForm />
      <TodoList />
    </Container>
  );
};
