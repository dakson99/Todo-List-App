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
        date: "14 Avg 2024",
        time: "16:10",
    },
    {
        title: "Task 2",
        description: "Task 2 description",
        date: "14 Avg 2024",
        time: "16:10",
    },
    {
        title: "Task 3",
        description: "Task 3 description",
        date: "14 Avg 2024",
        time: "16:10",
    },
    {
        title: "Task 4",
        description: "Task 4 description",
        date: "14 Avg 2024",
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
    });

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