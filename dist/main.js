const firstRow = document.getElementById('firstRow');
const input = document.createElement('input');
const newTask = document.createElement('button');
const listUl = document.getElementById('list-ul')
const newProject = document.createElement('button');
const toDo = document.getElementById('toDo');

newTask.textContent = "New Task"
newTask.classList.add("newTask")
input.classList.add("input")
newProject.textContent = "Save Project"
newProject.classList.add("newProject")

input.placeholder = "Add your text..."

toDo.appendChild(newProject);
firstRow.appendChild(input);
firstRow.appendChild(newTask)

function addTask(){
    if(input.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.textContent = input.value;
        listUl.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    input.value ="";
    saveData();
}

//Function to toggle checked class and remove li with x button.
listUl.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);




function saveData(){
    localStorage.setItem("data", listUl.innerHTML);
}

function showTask(){
    listUl.innerHTML = localStorage.getItem("data");
}

showTask();





newTask.addEventListener('click', addTask);




















function createTask(name, description, date) {
    return {
        name : name,
        description : description,
        date : date
    }
}

let task1 = createTask("work", "go to work", "tomorrow");

// firstRow.appendChild(task1);