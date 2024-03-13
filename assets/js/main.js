const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: null,
            tasks: [
                { text: "Stampare all'interno di una lista HTML un item per ogni todo.", done: false },
                { text: 'Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.', done: true },
            ],
            tasksCompleted: 0
        }
    },
    methods: {
        addTodo() {
            this.tasks.unshift({ text: this.newTodo, done: false });
        },
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
            this.tasks[index].done ? this.tasksCompleted++ : this.tasksCompleted--;
        },
        removeTask(index) {
            this.tasks[index].done && this.tasksCompleted--;
            this.tasks.splice(index, 1);
        }
    },
    created() {
        this.tasks.forEach(task => task.done == true && this.tasksCompleted++);
    }
}).mount('#app')