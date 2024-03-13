const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: null,
            tasks: [
                { text: 'First todo', done: false },
                { text: 'Second todo', done: true },
            ]
        }
    },
    methods: {
        addTodo() {
            this.tasks.unshift({ text: this.newTodo, done: false });
        },
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
}).mount('#app')