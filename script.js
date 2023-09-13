

const {createApp} = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Fare spesa',
                    done: true
                },
                {
                    text: 'Riparare lavatrice',
                    done: false
                },
                {
                    text: 'Pagare bollette',
                    done: true
                },
                {
                    text: 'Lavare macchina',
                    done: false
                }
            ],
            newTaskText: '',
            emptyTaskMessage: ''
        }
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index,1);
            console.log(this.tasks);
        },
        addTask() {
            if (this.newTaskText == '') {
                this.emptyTaskMessage = 'Il campo nuovo task è vuoto';
            } else {
                this.emptyTaskMessage = '';
                this.tasks.push({
                    text: this.newTaskText,
                    done: false
                });
                this.newTaskText = '';
                console.log(this.tasks);
            }
        }
    }
}).mount('#app');





/*
- input -> v-model per leggere e scrivere
- list item -> v-if
- p -> else
- button -> @click
*/