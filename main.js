const colTodo = document.querySelector('#colTodo');

const taskTitle = document.querySelector('#taskTitle');
const taskContent = document.querySelector('#taskContent');
const taskAdd = document.querySelector('#taskAdd');

taskAdd.addEventListener('click', (e) => {
  e.preventDefault();

  if (taskTitle.value.length < 3 || taskContent.value.length < 3) {
    return;
  }

  colTodo.innerHTML += `
        <div class="card ui-state-default" style="width:15rem">
            <div class="card-body">
                <div class="row">
                    <div class="col"><h5 class="card-title">${
                      taskTitle.value
                    }</h5></div>
                    <div class="col text-end text-danger"><i class='bx bx-x-circle'></i></div>
                </div>
                <p class="card-text">${taskContent.value}</p>
                <p class="text-end text-muted" style="font-size:.8rem">${moment().format(
                  'MMMM Do YYYY, h:mm:ss a'
                )}</p>   
            </div>
        </div>`;
  taskTitle.value = '';
  taskContent.value = '';
  let deleteTask = document.querySelectorAll('.text-danger');
  deleteTask.forEach((t) => {
    t.addEventListener('click', (e) => {
      colTodo.removeChild(
        e.target.parentElement.parentElement.parentElement.parentElement
      );
    });
  });
  $(function () {
    $('.card').draggable();
    $();
  });
});
