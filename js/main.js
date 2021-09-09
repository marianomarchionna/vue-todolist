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
                {title : 'Fare la spesa', done : true},
                {title : 'Fare il bucato', done : false},
                {title : 'Pulire casa', done : false},
                {title : 'Fare gli esercizi', done : true},
                {title : 'Comprare aspirapolvere', done : false},
                {title : 'Pulire macchina', done : true},
                {title : 'Mettere in ordine', done : true},
                {title : 'Pulire balcone', done : false}
            ]
        },
        methods: {
            addToDo(){
                let newObject = {
                    title : this.newToDo,
                    done: false
                };
                if (this.newToDo != '') {
                    this.toDos.push(newObject);
                    this.newToDo = "";
                }
            },
            // removeToDo(index){
            //     this.toDos.splice(index, 1);
            // },
            toggleVisibility(i) {
                this.toDos[i].done = !this.toDos[i].done;
            }
        }
    }
)
