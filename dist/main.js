const firstRow = document.getElementById('firstRow');
const input = document.createElement('input');
const newTask = document.createElement('button');
const listUl = document.getElementById('list-ul')
const newProject = document.createElement('button');
const toDo = document.getElementById('toDo');
const projectName = document.getElementById('project-name');
const sidebarUl = document.getElementById('sidebar-ul');
const sideProject = document.getElementsByClassName('sideProject');
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




function saveProject(){
    localStorage.setItem("doto", sidebarUl.innerHTML);
}

function showProjects(){
    sidebarUl.innerHTML = localStorage.getItem("doto");
}
showProjects();




newTask.addEventListener('click', addTask);

newProject.addEventListener('click', addProject);





function addProject(){
    if (projectName.value === ''){
        alert("Name your project!");
    }
    else {
        let sideProject = document.createElement("li");
        sideProject.textContent = projectName.value;
        sideProject.classList.add("sideProject");
        sidebarUl.appendChild(sideProject);
        input.value = "";
        projectName.value = "";
        listUl.textContent = "";
        saveProject();
        
    }

}

//sideProject.addEventListener('click', loadProject);

function loadProject(){
    console.log("yo");

}





















function createTask(name, description, date) {
    return {
        name : name,
        description : description,
        date : date
    }
}

let task1 = createTask("work", "go to work", "tomorrow");

// firstRow.appendChild(task1);