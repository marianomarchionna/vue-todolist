// BONUS
// modificare la struttura dell'array dei todos. Da array di stringhe diventa array di oggetti:
// Con la proprietà done colorare in verde gli <li> di todos  che sono stati svolti, in rosso gli <li> con todos non ancora svolti.
// Al click su un <li> potremo infine modificare la proprietà done, portandola a false se era precedentemente a true e viceversa.

Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            newToDo: "",
            toDos: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        },
        methods: {
        }
    }
)
