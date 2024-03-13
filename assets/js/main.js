const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                { text: 'First todo', done: false },
                { text: 'Second todo', done: false },
            ]
        }
    },
    methods: {
      
    }
}).mount('#app')