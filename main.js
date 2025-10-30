const tasks = [
  { title: "Купить продукты на неделю", isDone: false },
  { title: "Полить цветы", isDone: true },
  { title: "Сходить на тренировку", isDone: false },
];

const rootElement = document.getElementById("root");

const titleElement = document.createElement("h1");
titleElement.append("Список дел");

rootElement.append(titleElement);

const listElement = document.createElement("ul");

tasks.forEach((task) => {
  let listItemElement = document.createElement("li");

  let taskTitleElement = document.createElement("div");
  taskTitleElement.append(task.title);
  listItemElement.append(taskTitleElement);

  let taskStatusElement = document.createElement("input");
  taskStatusElement.type = "checkbox";
  taskStatusElement.checked = task.isDone;
  listItemElement.append(taskStatusElement);

  listElement.append(listItemElement);
});

rootElement.append(listElement);
