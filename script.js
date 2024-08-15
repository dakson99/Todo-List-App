const labels = document.querySelectorAll(".add-wrapper label");

labels.forEach((label) => {
    let input = label.querySelector("input");
    let span = label.querySelector("span");
    input.addEventListener("change", () => {
        span.innerHTML = input.value;
    });
});

let tasksArr = [
    {
        title: "Task 1",
        description: "Task 1 description",
        date: "2024 08 15",
        time: "16:10",
    },
    {
        title: "Task 2",
        description: "Task 2 description",
        date: "2024 08 15",
        time: "16:10",
    },
    {
        title: "Task 3",
        description: "Task 3 description",
        date: "2024 08 15",
        time: "16:10",
    },
    {
        title: "Task 4",
        description: "Task 4 description",
        date: "2022 08 15",
        time: "16:10",
    },
]

const tasksWrapper = document.querySelector(".task-wrapper");

function renderTasks() {
    tasksWrapper.innerHTML = "";

    //taskArray empty
    if (tasksArr.length === 0) {
        tasksWrapper.innerHTML = `<div class="no-tasks">No tasks, Add one now</div>`;
        return;
    }

    //if tasks add has tasks

    tasksArr.forEach((task) => {
        //check if expired
        let expired;
        expired = checkExpired(task) ? "expired" : "";

        tasksWrapper.innerHTML += `
                    <div class="task ">
                <div class="left">
                    <div class="radio">
                        <ion-icon class="icon" name="checkmark"></ion-icon>
                    </div>
                </div>
                <div class="right">
                    <p class="title">${task.title}</p>
                    <p class="description">${task.description}</p>
                    <div class="info ${expired}">
                        <p class="date">
                            <ion-icon name="calendar-outline"></ion-icon>
                            <span>${task.date}</span>
                        </p>
                        <p class="dot">
                            <ion-icon name="ellipse"></ion-icon>
                        </p>
                        <p class="time">
                            <ion-icon name="time-outline"></ion-icon>
                            <span>${task.time}</span>
                        </p>
                    </div>
                </div>
            </div>
        `;
    });

    tasksWrapper.innerHTML += `
    <div class="delete ">
                <ion-icon name="trash-outline"></ion-icon>
            </div>`;

    //add event listeners

    const tasks = document.querySelectorAll(".task");

    tasks.forEach((task) => {
        task.addEventListener("click", (e) => {
            //if radio checked
            if (e.target.classList.contains("radio")) {
                task.classList.toggle("selected");
                //show delete button when at leaset one tasks selected
                if (document.querySelector(".task.selected")) {
                    document.querySelector(".delete").classList.add("show");
                } else {
                    document.querySelector(".delete").classList.remove("show");
                }
            }
        });
    });

    //on delete remove task from arr and rerender
    const deleteBtn = document.querySelector(".delete");
    deleteBtn.addEventListener("click", deleteTasks);

}

renderTasks();

function checkExpired(task) {
    let date = new Date(task.date);
    let time = new Date(task.time);
    let now = new Date();
    if (date < now || time < now) {
        return true;
    }
    return false;
}

function deleteTasks() {
    const selectedTasks = document.querySelectorAll(".task.selected");
    if (selectedTasks.length === 0)
        return;
    //if some taks selected
    let confirmDelete = confirm("Are you sure you want do delete slected tasks");
    if (confirmDelete) {
        selectedTasks.forEach((task) => {
            //get title of task and filter matching title tasks
            let title = task.querySelector(".title").innerHTML;
            tasksArr = tasksArr.filter((task) => task.title != title);
        });
        renderTasks();
    }
}