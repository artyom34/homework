const tasks = [
  { title: "Купить продукты на неделю", isDone: false },
  { title: "Полить цветы", isDone: true },
  { title: "Сходить на тренировку", isDone: false },
];

const root = document.getElementById("root");

const headerEl = document.createElement("h1");
headerEl.append("Список задач");

root.append(headerEl);

const tasksEl = document.createElement("ul");

tasks.forEach((task) => {
  const taskEl = document.createElement("li");
  
  const taskTitleEl = document.createElement("div");
  taskTitleEl.append(task.title);
  taskEl.append(taskTitleEl);

  const taskStatusEl = document.createElement("input");
  taskStatusEl.type = "checkbox";
  taskStatusEl.checked = task.isDone;
  taskEl.append(taskStatusEl);

  tasksEl.append(taskEl);
});

root.append(tasksEl);
