

const {createApp} = Vue

createApp({
    data() {
        return {
            message: 'ciao',
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
                }
            ]
        }
    }
}).mount('#app');





/*
- input -> v-model per leggere e scrivere
- list item -> v-if
- p -> else
- button -> @click
*/