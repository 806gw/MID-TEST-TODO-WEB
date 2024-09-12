import { useState, useReducer, useRef, useCallback } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

const initialState = {
  "10월 16일": [],
  "10월 17일": [],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      const { date, newItem } = action;
      return {
        ...state,
        [date]: [...(state[date] || []), newItem],
      };
    }
    case "UPDATE": {
      const { date, id } = action;
      return {
        ...state,
        [date]: state[date].map((it) =>
          it.id === id ? { ...it, isDone: !it.isDone } : it
        ),
      };
    }
    case "DELETE": {
      const { date, id } = action;
      return {
        ...state,
        [date]: state[date].filter((it) => it.id !== id),
      };
    }
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, initialState);
  const [selectedDate, setSelectedDate] = useState("10월 16일");
  const idRef = useRef(3);

  const onCreate = (date, content) => {
    dispatch({
      type: "CREATE",
      date,
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = useCallback(
    (id) => {
      dispatch({
        type: "UPDATE",
        date: selectedDate,
        id,
      });
    },
    [selectedDate]
  );

  const onDelete = useCallback(
    (id) => {
      dispatch({
        type: "DELETE",
        date: selectedDate,
        id,
      });
    },
    [selectedDate]
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} onDateChange={handleDateChange} />
      <TodoList
        todo={todo[selectedDate]}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
