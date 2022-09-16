import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <input />
      <ul>
        <li>吃饭</li>
        <li>睡觉</li>
        <li>打游戏</li>
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
