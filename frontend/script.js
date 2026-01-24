function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    let buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = function () {
        li.remove();
    };

    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

/* 🎤 VOICE INPUT FEATURE */
function startVoice() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Voice recognition not supported in this browser");
        return;
    }

    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (event) {
        document.getElementById("taskInput").value =
            event.results[0][0].transcript;
    };

    recognition.onerror = function () {
        alert("Voice recognition error");
    };
}
