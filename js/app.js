// Initialize

// $(function() { // on document ready
//   listController = new ListsController();
//   listController.init();
//   tasksController = new TasksController();
//   tasksController.init();
// });

$(document).on('ready', function(){
  $('#add_list').on('submit', function(event){
    event.preventDefault()
    listsController.create();

    $('.destroy-list').on('click', function(event){
    event.preventDefault()
    var id = this.id;
    listsController.destroy(id);
  })
  });

  $('#add_task').on('submit', function(event){
    event.preventDefault()
    tasksController.create();

    $('.destroy-task').on('click', function(event){
      event.preventDefault()
      var id = $(this).parent().attr('data-id')
      tasksController.destroy(id);

  })
})
})