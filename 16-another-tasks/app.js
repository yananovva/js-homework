const newTask = {
    tasks: [{
        id: 1,
        name: 'тест',
        description: 'описание',
        order: 0
    }],
}

toDoList.addTask.call(newTask, { name: 'новая задача', description: 'описание новой задачи' });

toDoList.sortTasks.apply(newTask, ['priority', true]);

toDoList.updateTask.apply(newTask, [1, { name: 'обновленный заголовок', priority: 1 }]);

toDoList.deleteTask.apply(newTask, [2]);
