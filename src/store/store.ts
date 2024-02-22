import { configureStore, createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  text: string;
};

type CompleteTodo = {
  id: string;
};

const todoSlice = createSlice({
  name: "todo",
  initialState: [] as Todo[],
  reducers: {
    getTodo(state, action) {
      const todoObject = {
        id: new Date().toISOString(),
        text: action.payload,
      };

      state.push(todoObject);
    },
    removeTodo(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    resetTodo(state) {
      return (state = []);
    },
    removeCompleteTodo(state, action) {
      return state.filter((item) =>
        action.payload.every((data: { id: string }) => data.id !== item.id)
      );
    },
  },
});

const completeTodoSlice = createSlice({
  name: "completeTodo",
  initialState: [] as CompleteTodo[],
  reducers: {
    completeTodo(state, action) {
      state.push({ id: action.payload });
    },
    deleteCompleteTodo(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    removeCompleteTodo(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    resetCompleteTodo(state) {
      return (state = []);
    },
  },
});

export const todoActions = todoSlice.actions;
export const completeTodoActions = completeTodoSlice.actions;

export const store = configureStore({
  reducer: { todo: todoSlice.reducer, completeTodo: completeTodoSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
