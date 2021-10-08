import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { useLocalStorageState } from "../utils/localStorage";
import { useEffect } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useLocalStorageState("todos", [
    //useLocalStorageState >> custom Hook function
    { id: 0, name: "kochen" },
    { id: 1, name: "putzen" },
    { id: 2, name: "staubsaugen" },
  ]);
  // console.log([todos, setTodos]);
  // useEffect(() => {
  //   setItem("todos", todos); //"things to do" im localStorage unter dem key 'todos' speichern. jedes mal wenn sich die to do list ändern, wird in const todos gespeichert
  // }, [todos]); //useEffect wird nur aufgerufen wenn sich die const todos ändert
  const todoItems = todos.map(({ id, name }) => {
    return <TodoItem key={id} name={name} id={id} />;
  });

  //   const handleCreateTodo = (newTodo) => {
  //     // 1. Make new id
  //     const id = todos.length;
  //     // 2. Create todo object with name and id
  //     const newTodoObject = {
  //       id,
  //       name: newTodo,
  //     };
  //     // 3. Put new todo object into todos array
  //     setTodos([...todos, newTodoObject]); // or use setTodos = todos.concat(newTodoObject)
  //     console.log("onCreate was called", newTodo);
  //     console.log(todos);
  //   };

  return (
    <>
      <ul>{todoItems}</ul>
      <CreateTodo
        onCreate={(name) => {
          setTodos([...todos, { id: todos.length, name }]);
        }}
      />
    </>
  );
};
