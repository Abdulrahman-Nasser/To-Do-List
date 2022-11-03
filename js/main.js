
var inputTask = document.getElementById("task")
var myBar = document.getElementById("overlay");
var checked = 0;
var container 
var task

// function to display storage
displayLocalStorage()

// function to add tasks
function add(){
    task = {
        name: inputTask.value
    }
    container.push(task)
    localStorage.setItem("ourTask",JSON.stringify(container))
    display()
    clear()
}

// function to display tasks to html page
function display() {
    var x =""
    for(var i=0 ; i < container.length ; i++) {
        x+=
        `
        <div class="check1"  id="check1">
        <input type="checkbox" onclick="update()" id="c" >
        <label for="" class="w-75 mx-3 mt-4"  id="c2">${container[i].name}</label>
        <button href="#" class =" p-3 BTN mt-3" onclick="deleteTask(${i})"><i class="fa-solid fa-trash-can"></i></button>        
        </div>
        `
    }
    document.getElementById("form").innerHTML = x    
}

// function to check if the storage is empty or note
function displayLocalStorage() {
    if(localStorage.getItem("ourTask") == null) {
        container = []
    }else {
        container = JSON.parse(localStorage.getItem("ourTask"))
        display()
    }
}

// function to delte task from storage of the list
function deleteTask(i) {
   container.splice(i,1)
   localStorage.setItem("ourTask",JSON.stringify(container))
   myBar.style.width = 0;
   document.getElementById("overlay").innerHTML = "";
   display()
}

// function to delete all tasks from the list
function DeleteAllTasks() {
    container.splice(0)
    localStorage.setItem("ourTask",JSON.stringify(container))
    myBar.style.width = 0 + "%";
    document.getElementById("overlay").innerHTML ="";
    display()
}

// progress bar function 
function update() {
    var box= document.querySelectorAll("input[type = 'checkbox']:checked")
    var checked =box.length
    myBar.style.width = (checked/container.length)*100 + "%"
    myBar.style.transition = "All .4s"
    document.getElementById("overlay").innerHTML = Math.round(((checked/container.length) *100))+"%"

    // var fruits = document.getElementById("form");
    // boxes = fruits.querySelectorAll("input[type='checkbox']:checked");
    // checked = boxes.length
    // myBar.style.width = ((checked / container.length) * 100) + "%";
    // myBar.style.transition = ("All .5s")
    // document.getElementById("overlay").innerHTML =  Math.round(((checked / container.length) * 100) ) + "%";
}

// function to clear the value of the input 
function clear() {
    inputTask.value=""
}