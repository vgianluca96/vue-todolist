

const {createApp} = Vue

createApp({
    data() {
        return {
            condition: true,
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
                    done: false
                },
                {
                    text: 'Lavare macchina',
                    done: true
                }
            ]
        }
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index,1);
            console.log(index)
            console.log(this.tasks)
        }
    }
}).mount('#app');





/*
- input -> v-model per leggere e scrivere
- list item -> v-if
- p -> else
- button -> @click
*/