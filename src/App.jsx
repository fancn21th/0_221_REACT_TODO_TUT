import { useState, useEffect } from "react";
import "./App.css";

const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

const mockRequst = (params) => {
  return delay(2000).then(() => [
    {
      id: 1,
      title: "吃饭",
    },
    {
      id: 2,
      title: "睡觉",
    },
  ]);
};

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  // 派生状态
  const todoCount = todoList.length;

  // 生命周期
  useEffect(() => {
    // https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
    async function fetchTodoList() {
      const result = await mockRequst({});
      setTodoList(result);
    }

    fetchTodoList();
  }, []);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      const title = event.target.value.trim();

      if (todo) {
        setTodoList([
          ...todoList,
          {
            id: todoList.length + 1,
            title,
          },
        ]);
        setTodo("");
      }
    }
  };

  const onChange = (event) => {
    setTodo(event.target.value.trim());
  };

  const removeTodo = (removedId) => {
    const filteredTodoList = todoList.filter(({ id }) => id !== removedId);
    setTodoList(filteredTodoList);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>

      {todoCount ? (
        <h3>
          共有{" "}
          <span
            style={{
              color: "red",
            }}
          >
            {todoCount}
          </span>{" "}
          条待办
        </h3>
      ) : null}

      <input
        type="text"
        value={todo}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />

      <ul>
        {todoList.map(({ id, title }) => (
          <li key={id}>
            <a href="#">{title}</a>
            <span onClick={() => removeTodo(id)}>x</span>
          </li>
        ))}
      </ul>

      <ul className="command-list">
        <li>
          <h3>过滤：</h3>
        </li>
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">完成</a>
        </li>
        <li>
          <a href="#">未完成</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
