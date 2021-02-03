Vue.component('task', {
	template: '<li><slot></slot></li>'
})

Vue.component('task-list', {
	template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',

	data(){
		return{
			tasks: [
				{ description: "Go to the Store", completed: true},
				{ description: "Hello World", completed: false},
				{ description: "Revange for nature", completed: false},
				{ description: "GNothing to do", completed: true},
				{ description: "Go to the Store32", completed: false},
				{ description: "Go to the Store43543", completed: true},
				{ description: "Go to the Store44", completed: false},
			]
		}
	}
})

var app = new Vue({
			el: '#root',
			data:{

			},

			methods: {

			},

			mounted(){

			}
			

		})