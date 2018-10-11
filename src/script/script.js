// APP 1

var app = new Vue({
  el:'#app',
  data: {
    message: "Hello Vue"
  }
})

// APP 2

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

// APP 3

var app3 = new Vue({
  el:"#app-3",
  data: {
    seen: true
  }
})

// APP 4

var app4 = new Vue ({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn Javascript"},
      { text: "Learn Vue"},
      { text: "Build something awesome"}
    ]
  }
})

// APP 5

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js"
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("")
    }
  }
})

// APP 6

var app6 = new Vue({
  el:"#app-6",
  data:{
    message: "Hello Vue!"
  }
})

// APP 7

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
})

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      {id: 0, text:'Vegetables'},
      {id: 1, text:'Cheese'},
      {id: 2, text:'Whatever else humans are supposed to eat'},
    ]
  }

})

new Vue({
    el : "#todolist",
    data : {
        newtodo : null,
        todos : ['Boter', 'Kaas', 'Eieren', 'Whisky']
    },
    methods : {
        add : function() {
            this.todos.push(this.newtodo);
            this.newtodo = null;
        },

        remove : function(todo) {
            this.todos = this.todos.filter(function(t) {
                return t !== todo;
            });
        }
    }
})
