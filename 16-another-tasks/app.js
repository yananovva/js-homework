const newTask = {
    tasks: [{
        id: 1,
        name: 'тест',
        description: 'описание',
        order: 0
    }],
    addTask(data) {
        if (!data) {
            return this;
        }
        data.id = ++this.lastId;
        data.description = data.description || 'Без описания';
        this.tasks.push(data);
        const message = `Задача с "id" = ${data.id}  - успешно добавлена`;
        console.log(message);
        return this;
    },
    deleteTaskById(taskId) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex === -1) {
            console.log(`Задача с "id" = ${taskId} - не найдена.`);
            return;
        }
        const deletedTask = this.tasks.splice(taskIndex, 1)[0];
        console.log(`Задача "${deletedTask.name}" (id: ${deletedTask.id}) - успешно удалена.`);
        return this;
    },
    updateTaskById(taskId, updates) {
        const taskToUpdate = this.tasks.find(task => task.id === taskId);
        if (!taskToUpdate) {
            console.log(`Задача с "id" = ${taskId} - не найдена.`);
            return;
        }
        Object.assign(taskToUpdate, updates);
        return this;
    },
    sortTasksByOrder() {
        this.tasks.sort((a, b) => a.order - b.order);
    }
};

const data1 = { title: 'Данные номер 1', priority: 5 },
    data2 = { title: 'Данные номер 2', priority: 2 },
    data3 = { title: 'Данные номер 3', priority: 7 },
    data4 = { title: 'Данные номер 4', priority: 4 },
    data5 = { title: 'Данные номер 5', priority: 11 };

newTask
    .addTask(data1)
    .addTask(data2)
    .addTask(data3)
    .addTask(data4)
    .addTask(data5)
    .deleteTaskById(3)
    .updateTaskById(4, { title: 'Новое название', priority: 22 })
    .sortTasksByOrder('id');

console.log(newTask.tasks);