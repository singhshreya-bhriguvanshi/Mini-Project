$(document).ready(function(){
    const taskInput = $("#taskInput");
    const addTask = $("#addTask");
    const taskList = $("#taskList");

    addTask.on("click", addTaskHandler);

    taskInput.on("keypress", function(event) {
        if (event.which === 13) { 
            addTaskHandler();
            event.preventDefault(); // Prevents the default behavior of the Enter key (form submission, etc.)
        }
    });

    function addTaskHandler() {
        const taskText = taskInput.val().trim();
        if (taskText !== "") {
            const li = $("<li></li>").html(`
                <input type="checkbox" class="checkbox">
                <span>${taskText}</span>
                <button class="delete">x</button>
            `);

            taskList.append(li);
            taskInput.val("").focus();
            saveData();
        } 
        else {
            alert("Enter a task");
        }
    }

    addTask.on("click", function() {
        const taskText = taskInput.val().trim();
        if (taskText !== "") {
            const li = $("<li></li>").html(`
                <input type="checkbox" class="checkbox">
                <span>${taskText}</span>
                <button class="delete">x</button>
            `);

            taskList.append(li); 
            taskInput.val("").focus();
            saveData();
        } 
        // else {
        //     alert("Enter a task");
        // }
    });

    taskList.on("click", ".delete, .checkbox", function(event) {
        const target = $(event.target);
        if (target.hasClass("delete")) {
            target.parent().remove();
        } else if (target.hasClass("checkbox")) {
            const task = target.next();

            if (target.prop("checked")) {
                task.addClass("complete");
            } else {
                task.removeClass("complete");
            }
        }
        saveData();
    });

    // Function to handle checkbox change
    taskList.on("change", "input[type='checkbox']", function() {
        const listItem = $(this).closest("li"); // Get the parent list item

        if (this.checked) {
            taskList.append(listItem); // Move checked item to the bottom
        } else {
            taskList.prepend(listItem); // Move unchecked item to the top
        }
    });

    function saveData(){
        localStorage.setItem("data", taskList.html());
    }

    function showTask(){
        if(localStorage.getItem("data")) {
            taskList.html(localStorage.getItem("data"));
        }
    }

    showTask();
});

