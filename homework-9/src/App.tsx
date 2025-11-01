import { useState } from "react";

const tasks = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: false,
    addedAt: "1 сентября",
    priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
    priority: 0,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
    priority: 1,
  },
];

export function App() {
  const [taskId, setTaskId] = useState(0); // to avoid TS error

  if (tasks === null) {
    return <div>{"Loading..."}</div>;
  }

  if (tasks.length === 0) {
    return <div>{"There is no tasks..."}</div>;
  }

  return (
    <div>
      <button onClick={() => setTaskId(0)}>Сбросить выдиление</button>

      <h1>To-do list</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              style={{
                padding: "10px",
                marginBottom: "10px",
                border:
                  task.id === taskId ? "4px solid green" : "2px solid black",
                backgroundColor: task.priority === 2 ? "#3b1818ff" : "",
              }}
              onClick={() => {
                setTaskId(task.id);
              }}
            >
              <span>Заголовок: </span>
              <span
                style={{
                  textDecorationLine: task.isDone ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
              <div>
                <span>Статус:</span>
                <input type="checkbox" checked={task.isDone}></input>
              </div>
              <div>
                <span>Дата создания задачи:</span> {task.addedAt}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
