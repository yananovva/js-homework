// Написать объект ToDoList, который хранит в себе задачи {'title': 'Помыть посуду', id: 1, priority: 1}
// и имеет методы: - Добавить задачу - Удалить задачу по id - Обновить имя или приоритет по id
// - Отсортировать задачи по приоритету

const toDoList = {
    tasks: [],
    title: 'Помыть посуду',
    id: 1,
    priority: 1,
    addTask: function (title, priority) {
        const newTask = {
            id: ++this.id,
            title: title,
            priority: priority
        };
        this.tasks.push(newTask);
        console.log(`Задача "${newTask.title}" с приоритетом ${newTask.priority} добавлена (id: ${newTask.id})`);
    },
    deleteTask: function (taskId) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            const deletedTask = this.tasks.splice(taskIndex, 1)[0];
            console.log(`Задача "${deletedTask.title}" (id: ${deletedTask.id}) удалена.`);
        } else {
            console.log(`Задача с id ${taskId} не найдена.`);
        }
    },
    updateTask: function (taskId, updatedTitle, updatedPriority) {
        const taskToUpdate = this.tasks.find(task => task.id === taskId);

        if (taskToUpdate) {
            taskToUpdate.title = updatedTitle;
            taskToUpdate.priority = updatedPriority;
            console.log(`Задача с id ${taskId} обновлена: новое название - "${updatedTitle}", новый приоритет - ${updatedPriority}.`);
        } else {
            console.log(`Задача с id ${taskId} не найдена.`);
        }
    },
    sortTasks: function (sortBy, order = 'asc') {
        const sortFunctions = {
            id: (a, b) => a.id - b.id,
            priority: (a, b) => a.priority - b.priority
        };

        const sortFunction = sortFunctions[sortBy] || sortFunctions.id;

        this.tasks.sort((a, b) => {
            const result = sortFunction(a, b);
            return order === 'desc' ? -result : result;
        });

        console.log(`Задачи отсортированы по ${sortBy} в порядке ${order}.`);
    }
};


toDoList.addTask("Сделать уборку", 2);
toDoList.addTask("Сходить в спортзал", 3);
console.log(toDoList.tasks);

toDoList.deleteTask(2);
toDoList.deleteTask(4);
console.log(toDoList.tasks);

toDoList.updateTask(2, 'Подготовить презентацию', 1);
toDoList.updateTask(4, 'Новая задача', 2);
console.log(toDoList.tasks);

toDoList.sortTasks('priority');
console.log(toDoList.tasks);
toDoList.sortTasks('id', 'desc');
console.log(toDoList.tasks);