import { Container } from "../../ui/Container";
import { CurrentDate } from "./CurrentDate";
import { CompleteMessage } from "./CompleteMessage";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { useState } from "react";
import { TodoBtn } from "./TodoBtn";

export type Todo = {
  id: string;
  text: string;
};

export const Home = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [completeTodo, setCompleteTodo] = useState<Todo[]>([]);

  const getTodo = (data: string) => {
    const todoObject: Todo = {
      id: new Date().toISOString(),
      text: data,
    };

    setTodo((prev) => {
      return prev.concat(todoObject);
    });
  }; // todo 등록 함수

  const removeHandler = (id: string) => {
    setTodo((prev) => {
      return prev.filter((data) => data.id !== id);
    });
    setCompleteTodo((prev) => {
      return prev.filter((data) => data.id !== id);
    });
  }; // todo 삭제 함수

  const resetHandler = () => {
    setTodo([]);
  }; // todo리스트 초기화 함수

  const getCompleteTodo = (id: string, text: string, valid: boolean) => {
    if (valid) {
      setCompleteTodo((prev) => {
        return prev.concat({ id: id, text: text });
      });
    } else if (!valid) {
      setCompleteTodo((prev) => {
        return prev.filter((data) => data.id !== id);
      });
    }
  }; // 완료리스트 가져오는 함수

  const removeCompleteTodo = () => {
    setTodo((prev) => {
      return prev.filter((todo) =>
        completeTodo.every((comp) => comp.id !== todo.id)
      );
    });
    setCompleteTodo([]);
  }; // 완료리스트 삭제 함수

  return (
    <Container>
      <CurrentDate />
      <CompleteMessage
        todoLength={todo.length}
        completeLength={completeTodo.length}
      />
      <TodoForm getTodo={getTodo} />
      <TodoList
        todoList={todo}
        removeHandler={removeHandler}
        getCompleteTodo={getCompleteTodo}
      />
      <TodoBtn
        resetHandler={resetHandler}
        removeCompleteTodo={removeCompleteTodo}
      />
    </Container>
  );
};
