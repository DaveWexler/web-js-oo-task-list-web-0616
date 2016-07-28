'use strict';
// List Model
const store = {
  lists: [],
  tasks: []
}

const List = (function() {
  var counter = 1

  return class {
    constructor(title) {
      this.id = counter++
      this.title = title
      this.tasks = []
      store.lists.push(this)
    }

    build() {
      $('#lists').append(
        `<div class="list" id="${this.id}">
          <h2><button class="destroy-list" id= ${this.id}>x</button> ${this.title}</h2>
        <ul id="list-${this.id}" data-id="${this.id}"></ul>
        </div>`
      )
      $('#select_list').append(
        `<option value="${this.id}">${this.title}</option>`
        )
    }

    destroy() {
      $(`div#${this.id}`).remove()
      $(`option[value="${this.id}"]`).remove()
      var index = store.lists.indexOf(this);
      store.lists = store.lists.filter(function(index){
        return this.id !== index
      })
    }
  }
})()