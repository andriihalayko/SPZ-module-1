import { useEffect, useState } from "react";

import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((res) => res.json())
      .then((todos) => setData(todos));
  }, []);

  return (
    <div>
      {data.map((t, i) => (
        <TodoListItem data={t} key={i} />
      ))}
    </div>
  );
};

export default TodoList;
