const labels = document.querySelectorAll(".add-wrapper label");

labels.forEach((label) => {
    let input = label.querySelector("input");
    let span = label.querySelector("span");
    input.addEventListener("change", () => {
        span.innerHTML = input.value;
    });
});