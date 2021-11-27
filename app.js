//Selectors
const todoInput = document.querySelector('.todo-input')
const todobutton = document.querySelector('.todo-btn')
const todolist = document.querySelector('.todo-list')
// const trashbtn = document.querySelector('.trash-btn')
// const metbtn = document.querySelector('.met-btn')
// const div = document.querySelector('.todo')


//functions
const addGoal=(event)=>{
    //prevent Default
    event.preventDefault();
    // //goaldiv
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // //goalmet Check
    const metBtn = document.createElement('button')
    metBtn.classList.add('met-btn')
    metBtn.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(metBtn)
    // //create li
    const li = document.createElement('li')
    li.innerText = todoInput.value
    li.classList.add('todo-item')
    todoDiv.appendChild(li)
    // //trastbtn
    const trashBtn = document.createElement('button')
    trashBtn.classList.add('trash-btn')
    trashBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
    todoDiv.appendChild(trashBtn)

    // //attach div
    todolist.appendChild(todoDiv)
    //clear
    todoInput.value = ''

}

const deleteCompletegoal= (e)=>{
    //trash-btn
    const item = e.target;
    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    //Metbtn Mark
    if(item.classList[0] === 'met-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}


//Event Listeners
todobutton.addEventListener('click', addGoal)
todolist.addEventListener('click', deleteCompletegoal)