/*
Добавьте кнопку для удаления всех задач из хранилища и со страницы.

Под списком задач создайте три панели со статистикой по каждой группе задач. Секции стилизуются с помощью классов Bootstrap .panel и .badge. При добавлении новой задачи или при удалении всех задач информация в блоках соответственно обновляется.
*/

// Enter на input по умолчанию отправляет форму submit
// AT -  2 часа

(() => {
    'use strict';
    
    $modalAddTask.on('shown.bs.modal', showModalHandler);    
    $formAddTask.on('submit', addFormSubmitHandler);
    // удаление всех задач из хранилища и со страницы
    $removeTask.on('click', removeTaskHandler);

    $('body').on('click', '.btn-delete-task', deleteTaskHandler);
    $('body').on('click', '.btn-edit-task', editTaskHandler);
    $formEditTask.on('submit', editFormSubmitHandler);

    // извлекаем задачи и отрисовываем заново при загрузке страницы
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        let task = JSON.parse(localStorage[key]);
        
        addTask(task, key);
    }
    changeTaskNumber();

})();


// git log --pretty посмотреть историю коммитов
// git checkout хеш-тег коммита - посмотреть конкретный коммит
// git 