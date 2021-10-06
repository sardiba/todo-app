import { useState } from "react";
import "./TodoItem.css";

export const TodoItem = ({ name }) => {
  const [isDone, setDone] = useState(false);
  const toggleClick = () => {
    setDone(!isDone);
  };
  const listClassName = isDone ? "TodoItem TodoItem--is-done" : "TodoItem";
  return (
    <li onClick={toggleClick} className={listClassName}>
      {name}
    </li>
  );
};
