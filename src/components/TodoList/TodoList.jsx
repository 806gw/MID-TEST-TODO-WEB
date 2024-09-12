import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <div className="list_wrapper">
        {todo && todo.length > 0 ? (
          todo.map((it) => (
            <TodoItem
              key={it.id}
              {...it}
              onUpdate={() => onUpdate(it.id)}
              onDelete={() => onDelete(it.id)}
            />
          ))
        ) : (
          <div>해당 날짜에 할 일이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
