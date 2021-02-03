Vue.component('messages', {
	
	props: ['title', 'body'],
	template: '<div><h1>{{ title }}</h1><p>{{ body }}</p></div>'
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