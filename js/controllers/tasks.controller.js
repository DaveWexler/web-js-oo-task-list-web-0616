'use strict';
// Tasks Controller

var tasksController = (function() { 
  // var list_title = $('#select_list').text()
  // var list = _.where(store.lists, {title: list_title})[0]
  function create() {
    var listId = $('#select_list').val()
    var description = $('#task_description').val()
    var priority = $('#task_priority').val()

    var newTask = new Task(listId, description, priority)
    newTask.build()
  }


  function destroy(taskdataId) {
    var tasknum = parseInt(taskdataId)
    var task = _.where(store.tasks, {id: tasknum})[0]
    task.destroy()
  }
  return {
    create,
    destroy
  }
})()
// <form id="add_task" action="#" method="post">
//       <label for="select_list">Select List:</label>
//       <select id="select_list" name="select_list"></select>
//       <label for="task_description">Task description:</label>
//       <input type="text" id="task_description" name="task_description" placeholder="description">
//       <label for="task_priority">Priority level:</label>
//       <input type="text" id="task_priority" name="task_priority" placeholder="priority">
//       <input type="submit" value="(+) add">
//     </form><!-- #add_task -->
//     