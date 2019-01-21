// функция отрисовки данных на странице
function addTask(task, id) {
    let $btnDelete = $('<a>').addClass('btn btn-danger btn-delete-task btn-xs pull-right').append('<i>').addClass('glyphicon glyphicon-trash');
    let $btnEdit = $('<a>').addClass('btn btn-warning btn-edit-task btn-xs pull-right').append('<i>').addClass('glyphicon glyphicon-pencil');

    $('<li>')
        .appendTo(`[data-status="${task.status}"]`)
        .addClass('list-group-item')
        .attr('data-id', id) // создаем спец атрибут      
        .text(task.title)
        .append($btnDelete)
        .append($btnEdit);
}

//ф-ция посчёта данных в localStorage в зависимости от типа status 
function changeTaskNumber() {
    let statusNum1 = 0;
    let statusNum2 = 0;
    let statusNum3 = 0;

    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        let task = JSON.parse(localStorage[key]);

        if (task.status === 1) {
            statusNum1 += 1;            
        }

        if (task.status === 2) {
            statusNum2 += 1;            
        }

        if (task.status === 3) {
            statusNum3 += 1;            
        }
    }

    $('#status1').text(statusNum1);
    $('#status2').text(statusNum2);
    $('#status3').text(statusNum3);
}