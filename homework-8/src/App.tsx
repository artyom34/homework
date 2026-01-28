import { useState } from "react";
import "./index.css";

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

function App() {
  const [selectedTaskId, setSelectedTaskId] = useState(null); //useState<number | null>(null);

  if (tasks.length === 0) {
    return <h1>Задачи отсутствуют</h1>;
  }

  if (tasks === null) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div>
      <h1>Список дел</h1>
      <button onClick={() => setSelectedTaskId(null)}>
        сбросить выбранное
      </button>

      <ul>
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              onClick={() => setSelectedTaskId(task.id)}
              style={{
                backgroundColor: task.priority === 2 ? "#e29663ff" : "none",
                border:
                  selectedTaskId === task.id
                    ? "2px solid blue"
                    : "2px solid black",
              }}
            >
              <div>
                Заголовок:
                <span
                  style={
                    task.isDone
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {task.title}
                </span>
              </div>
              <div>
                <span>Статус: </span>
                <input type="checkbox" checked={task.isDone} />
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

export default App;
