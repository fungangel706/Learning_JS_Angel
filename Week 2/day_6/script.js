const loadBtn = document.getElementById("loadBtn");
const taskContainer = document.getElementById("taskContainer");
function getTask() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve([
                "Learn JavaScript",
                "Practise promises",
                "Understand async await",
                "Build a project"
            ]);
        }, 2000);
    });
}



loadBtn.addEventListener("click", async function loadTasks() {
    taskContainer.innerHTML = "<p>Loading tasks...</p>";

    const task = await getTask();
    taskContainer.innerHTML ="";
    task.forEach((task) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");
        taskItem.textContent = `${task}`;
        taskContainer.appendChild(taskItem);
    });

});
