const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                { text: 'First todo', done: false },
                { text: 'Second todo', done: false },
            ]
        }
    },
    methods: {
      
    }
}).mount('#app')