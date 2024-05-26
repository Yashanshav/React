import { createContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    removeTodo: () => {},
    toggleComplete: {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}