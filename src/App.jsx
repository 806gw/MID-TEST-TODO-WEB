import { useReducer, useRef, useCallback } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoEditor from "./components/TestEditor/TestEditor";
import TodoList from "./components/TestList/TestList";

const mockTodo = [
  {
    id: 0,
    content: "아무거나",
    createDate: new Date().getTime(),
    isDone: false,
  },
  {
    id: 1,
    content: "아무거나 1",
    createDate: new Date().getTime(),
    isDone: false,
  },
  {
    id: 2,
    content: "아무거나 2",
    createDate: new Date().getTime(),
    isDone: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.newItem];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.newItem ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.newItem);
    }
    default:
      return state;
  }
}

function App() {
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;

    // const newItem = {
    //   id: idRef.current,
    //   content,
    //   isDone: false,
    //   createDate: new Date().getTime(),
    // };
    // setTodo([newItem, ...todo]);
    // idRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      newItem: targetId,
    });

    // setTodo(
    //   todo.map((it) =>
    //     it.id === targetId ? { ...it, isDone: !it.isDone } : it
    //   )
    // );
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      newItem: targetId,
    });
    //setTodo(todo.filter((it) => it.id !== targetId));
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
