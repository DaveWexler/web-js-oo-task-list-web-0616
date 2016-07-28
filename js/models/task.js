'use strict';
// Task Model


const Task = (function() {
  var counter = 1

  return class {
    constructor(listId, description, priority) {
      this.id = counter++
      this.description = description
      this.priority = priority
      this.listId = listId
      store.tasks.push(this)
      // list.tasks.push(this)
    }

    build() {
      $(`ul#list-${this.listId}`).append(
        `<li data-id="${this.id}" id="t-${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
      ) 
    }

    destroy() {
      $(`li#t-${this.id}`)[0].remove()
      var index = store.tasks.indexOf(this);
      store.tasks = store.tasks.filter(function(index){
        return this.id !== index
      })
    }
  }
})()