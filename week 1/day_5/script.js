// Day 5 - Student Task Manager
let tasks = [];

let addButton =document.getElementById("addButton");
let taskList = document.getElementById("taskList");
 let taskInput = document.getElementById("taskInput");

function addTask() {
   
    let taskText = taskInput.value.trim();
    if (taskText ==="") {
        alert("please enter a task!");
       return;
    }
    

    let now = new Date();

    let currentDate = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    let currentTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    });

let task = {
        name: taskText,
        time: currentTime,
        date: currentDate,
        createdAt: currentTime,
        completed: false
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    let listItem = document.createElement("li");
    listItem.classList.add("task-item");
    listItem.innerHTML = `<span>${task.name}</span> <small>${task.date} ${task.time}</small>`;
    taskList.appendChild(listItem);
    taskInput.value = "";
    const taskTime = document.getElementById("taskTime");
    taskTime.value = "";

    }

    


        


