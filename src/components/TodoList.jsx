import { useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 0, name: "kochen" },
    { id: 1, name: "putzen" },
    { id: 2, name: "staubsaugen" },
  ]);
  const todoItems = todos.map(({ id, name }) => {
    return <TodoItem key={id} name={name} />;
  });

  const handleCreateTodo = (newTodo) => {
    // 1. Make new id
    const id = todos.length;
    // 2. Create todo object with name and id
    const newTodoObject = {
      id,
      name: newTodo,
    };
    // 3. Put new todo object into todos array
    setTodos([...todos, newTodoObject]); // or use setTodos = todos.concat(newTodoObject)
    console.log("onCreate was called", newTodo);
    console.log(todos);
  };

  return (
    <>
      <ul>{todoItems}</ul>
      <CreateTodo onCreate={handleCreateTodo} />
    </>
  );
};
