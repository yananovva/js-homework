// Написать объект ToDoList, который хранит в себе задачи {'title': 'Помыть посуду', id: 1, priority: 1}
// и имеет методы: - Добавить задачу - Удалить задачу по id - Обновить имя или приоритет по id
// - Отсортировать задачи по приоритету


const toDoList = {
    lastId: 0,
    tasks: [],
    addTask(data) {
        if (!data) {
            return this;
        }
        data.id = ++this.lastId;
        this.tasks.push(data);
        const message = `Задача с "id" = ${data.id}  - успешно добавлена`;
        console.log(message);
        return this;
    },
    deleteTask: function (taskId) {
        const [task] = this.tasks.filter((task) => task.id !== taskId);
        if (!task) {
            console.log(`Задача с "id" = ${taskId}  - не найдена.`);
            return;
        }
        console.log(`Задача "${task.title}" (id: ${task.id}) - успешно удалена.`);
        this.tasks = this.tasks.filter(({ id }) => id !== task.id);
        return this;
    },
    updateTask: function (taskId, data) {
        // data = {title: 'Новое название, priority: 22}
        const task = this.tasks.find(({ id }) => id === taskId);
        if (!task) {
            return this;
        }
        // task = {id: 4, title: 'Я заголовок', proirity: 4}
        Object.assign(task, data);
        // task = {id: 4, title: 'Новое название', proirity: 22}
        return this;
    },
    sortTasks: function (sortBy = 'id', desc = false) {
        const sortFunctions = {
            id: (a, b) => a.id - b.id,
            priority: (a, b) => a.priority - b.priority,
        };
        if (!sortFunctions[sortBy]){
            console.log(`Сортировка по ключу "${sortBy}" невозможна, доступные ключи: [${Object.keys(sortFunctions)}]`);
            return;
        }
        this.tasks.sort((a, b) => {
            const result = sortFunctions[sortBy](a, b);
            return desc ? -result : result;
        });

        console.log(`Задачи отсортированы по ${sortBy} в порядке ${desc ? 'DESC' : 'ASC'}.`);
    },
};

const data1 = { title: 'Данные номер 1', priority: 5 },
    data2 = { title: 'Данные номер 2', priority: 2 },
    data3 = { title: 'Данные номер 3', priority: 7 },
    data4 = { title: 'Данные номер 4', priority: 4 },
    data5 = { title: 'Данные номер 5', priority: 11 };

toDoList
    .addTask(data1)
    .addTask(data2)
    .addTask(data3)
    .addTask(data4)
    .addTask(data5)
    .deleteTask(3)
    .updateTask(4, { title: 'Новое название', priority: 22 })
    .sortTasks('id');

console.log(toDoList.tasks);