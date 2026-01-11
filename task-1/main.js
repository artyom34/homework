const tasks = [
  {
    title: "Купить продукты на неделю",
    isDone: false,
  },
  {
    title: "Полить цветы",
    isDone: true,
  },
  {
    title: "Сходить на тренировку",
    isDone: false,
  },
];

const rootElement = document.getElementById("root");
const titleElement = document.createElement("h1");
titleElement.append("Список дел");

rootElement.append(titleElement);

const listElements = document.createElement("ul");

tasks.forEach((task) => {
  const taskElement = document.createElement("li");

  const titleTask = document.createElement("div");
  titleTask.append(task.title);

  taskElement.append(titleTask);

  const taskStatus = document.createElement("input");
  taskStatus.type = "checkbox";
  taskStatus.checked = task.isDone;

  taskElement.append(taskStatus);

  listElements.append(taskElement);
});

rootElement.append(listElements);
