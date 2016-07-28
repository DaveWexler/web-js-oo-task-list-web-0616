'use strict';
// Lists Controller

var listsController = (function() {

  function create() {
    var title = $('#list_title').val()
    var newlist = new List(title)
    newlist.build()
  }

  function destroy(listId) {
    var listnum = parseInt(listId)
    var list = _.where(store.lists, {id: listnum})[0]
    list.destroy()
  }

  return {
    create,
    destroy
  }

})()