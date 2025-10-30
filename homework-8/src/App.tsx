// const tasks = null;
const tasks = [
  {
    id: 1,
    title: "Buy groceries for the week",
    isDone: false,
    addedAt: "1 september",
    priority: "1",
  },
  {
    id: 2,
    title: "Water the flowers",
    isDone: false,
    addedAt: "2 september",
    priority: "2",
  },
  {
    id: 3,
    title: "Go to the gym",
    isDone: true,
    addedAt: "4 september",
    priority: "3",
  },
  {
    id: 4,
    title: "Срочно отправить рабочий отчет",
    isDone: false,
    addedAt: "1 сентября",
    priority: "4",
  },
  {
    id: 5,
    title: "Заплатить за коммунальные услуги",
    isDone: false,
    addedAt: "2 сентября",
    priority: "3",
  },
];

// const taskPriority = "2";

function App() {
  if (tasks === null) {
    return <h1>Loading...</h1>;
  }

  if (tasks.length === 0) {
    return <h1>To-do list is empty</h1>;
  }

  return (
    <div>
      <h1>To-do list</h1>
      <ul style={{ listStyleType: "none" }}>
        {tasks.map((task) => {
          return (
            <li
              style={{
                border: "2px solid black",
                marginBottom: "10px",
                width: "250px",
                padding: "10px",
                backgroundColor:
                  task.priority === "0"
                    ? "#ffffff"
                    : task.priority === "1"
                    ? "#ffd7b5"
                    : task.priority === "2"
                    ? "#ffb38a"
                    : task.priority === "3"
                    ? "#ff9248"
                    : task.priority === "4"
                    ? "#ff6700"
                    : "white",
              }}
            >
              <div>
                <div>
                  <span>Title:</span>
                  <span
                    style={{
                      textDecorationLine: task.isDone ? "line-through" : "none",
                    }}
                  >
                    {task.title}
                  </span>
                </div>
                <div>
                  <span>Status:</span>
                  <input type="checkbox" checked={task.isDone} />
                </div>
                <div>
                  <span>Task creation data:</span>
                  <span>{task.addedAt}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
