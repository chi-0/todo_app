import styled from "styled-components";
import { COLOR_PICK } from "../../style/colorPick";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/store";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 20px;

  > label {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Input = styled.input`
  all: unset;
  width: 480px;
  height: 60px;
  padding: 0 13px;
  background-color: ${COLOR_PICK.textColor};
  color: ${COLOR_PICK.darkColor};
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;

  &::placeholder {
    font-weight: 300;
  }

  @media screen and (max-width: 600px) {
    max-width: 480px;
    width: 100%;
    height: 50px;
    font-size: 16px;
    padding: 0 10px;
  }
`;

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  height: 60px;
  padding: 0 10px;
  background-color: ${COLOR_PICK.mainColor};
  box-sizing: border-box;
  font-size: 18px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
    height: 50px;
    padding: 0 8px;
    flex-shrink: 0;
  }
`;

type FormValues = {
  todo: string;
};

export const TodoForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    const { todo } = data;
    reset({ todo: "" });

    if (todo.trim().length === 0) {
      return;
    }

    dispatch(todoActions.getTodo(todo));
  };

  return (
    <Form id="todoForm" onSubmit={handleSubmit(submitHandler)}>
      <label htmlFor="todoText" />
      <Input
        id="todoText"
        type="text"
        placeholder="해야할 일은?"
        autoComplete="off"
        {...register("todo")}
      />
      <Btn type="submit">추가하기</Btn>
    </Form>
  );
};
