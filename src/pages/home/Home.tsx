import { Container } from "../../ui/Container";
import { CurrentDate } from "./CurrentDate";
import { CompleteMessage } from "./CompleteMessage";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { useState } from "react";

export type Todo = {
  id: string;
  text: string;
};

export const Home = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const getTodo = (data: string) => {
    const todoObject: Todo = {
      id: new Date().toISOString(),
      text: data,
    };

    setTodo((prev) => {
      return prev.concat(todoObject);
    });
  };

  console.log(todo);

  return (
    <Container>
      <CurrentDate />
      <CompleteMessage />
      <TodoForm getTodo={getTodo} />
      <TodoList todoList={todo} />
    </Container>
  );
};
