
function showModalHandler () {
    $modalAddTask.find('input[name="title"]').focus();
}

function addFormSubmitHandler(event) {
    event.preventDefault();  

    var task = {        
        title: $('[name="title"]', this).val(),
        status: 1 //1 - todo, 2 - in progress, 3 - done
    };
    
    if (!task.title) return;
    
    let id = new Date().getTime();
    localStorage.setItem(id, JSON.stringify(task));

    addTask(task, id);
    
    $modalAddTask.modal('hide');   

    this.reset();
    
    changeTaskNumber();
}

function removeTaskHandler () {    
    localStorage.clear();
    $('[data-status]').find('li').remove();   
    changeTaskNumber();
}

function deleteTaskHandler(event) {
    event.preventDefault();
    //console.log(this);

    let $parent = $(this).parents( '[data-id]' ),
        id = $parent.attr('data-id');

    //console.log( $parent.data('id') );
    //console.log(id);

    localStorage.removeItem(id);
    $parent.remove();

    changeTaskNumber();

}


function editTaskHandler(event) {
    event.preventDefault();
    //console.log(this);

    let $parent = $(this).parents('[data-id]'),
        id = $parent.attr('data-id');

    //открыли модальное окно
    $modalEditTask.modal('show');
    // заполнить значениями из задачи, данные title и статус по ключу
    let task = JSON.parse( localStorage.getItem(id) );

    // вставить статус и данные в инпут и селект
    // находим в форме поле с именем name=key и вставляем значение из объекта task
    for (let key in task) {
        $formEditTask.find(`[name = "${key}"]`).val( task[key] );
    }
    //console.log(task);
    // для скрытого поля input hidden
    $formEditTask.find('[name = id]').val(id);

}

function editFormSubmitHandler(event) {
    event.preventDefault();

    var task = {
        title: $('[name="title"]', this).val(),
        status: +$('[name="status"]', this).val()
    };

    let id = $('[name = id]', this).val();
    //console.log(this);

    localStorage.setItem( id, JSON.stringify(task) );

// найти на стр элемент с data-id
$(`[data-id = "${id}" ]`).remove();
addTask(task, id);

//закрыть модальное окно
$modalEditTask.modal('hide');
changeTaskNumber();
}
