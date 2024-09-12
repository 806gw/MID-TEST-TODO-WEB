import { memo } from "react";
import "./TodoItem.css";

function TodoItem({ id, content, isDone, onUpdate, onDelete }) {
  console.log(`${id} render!`);
  const onChaangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChaangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className={`title_col ${isDone ? "done" : ""}`}>{content}</div>
      <div className="date_col">{new Date().toDateString()}</div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}

export default memo(TodoItem);
