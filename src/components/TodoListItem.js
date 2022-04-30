const TodoListItem = ({ data }) => (
  <div style={{ display: "flex" }}>
    <div>{data.id}</div>
    <div>{data.title}</div>
  </div>
);

export default TodoListItem;
