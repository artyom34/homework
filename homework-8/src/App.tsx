import "./index.css";

// const tasks = null;

// const tasks = [];

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
  {
    id: 4,
    title: "Срочно отправить рабочий отчет",
    isDone: false,
    addedAt: "4 сентября",
    priority: 4,
  },
  {
    id: 5,
    title: "Заплатить за коммунальные услуги",
    isDone: false,
    addedAt: "3 сентября",
    priority: 3,
  },
];

function App() {
  if (tasks.length === 0) {
    return <h1>Задачи отсутствуют</h1>;
  }

  if (tasks === null) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className="main">
      <h1>Список дел</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              style={
                task.priority === 0
                  ? { backgroundColor: "rgba(255, 255, 255, 1)" }
                  : task.priority === 1
                    ? { backgroundColor: "rgba(255, 215, 181, 1)" }
                    : task.priority === 2
                      ? { backgroundColor: "rgba(255, 179, 138, 1)" }
                      : task.priority === 3
                        ? { backgroundColor: "rgba(255, 146, 72, 1)" }
                        : task.priority === 4
                          ? { backgroundColor: "rgba(255, 103, 0, 1)" }
                          : ""
              }
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
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
