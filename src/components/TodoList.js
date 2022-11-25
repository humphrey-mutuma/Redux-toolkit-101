import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.tasks);
  return (
    <div className="tasks-list">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </div>
  );
}
