function App() {
  const listTasks = [
    { id: 1, task: "take a shower", isDone: true },
    { id: 2, task: "brash of teeth", isDone: true },
    { id: 3, task: "have breakfast", isDone: true },
    { id: 4, task: "learn React", isDone: false },
    { id: 5, task: "have lunch", isDone: false },
    { id: 6, task: "learn TypeScript", isDone: false },
  ];

  return (
    <>
      <h1>To-do List</h1>
      <ul>
        {listTasks.map((task) => {
          return (
            <li key={task.id}>
              <div>{task.task}</div>
              <input type="checkbox" checked={task.isDone}></input>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default App;
