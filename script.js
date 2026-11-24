let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
function render() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach((t, i) => {
        const li = document.createElement('li');
        if (t.done) li.classList.add('done');
        li.innerHTML = `<span onclick="toggleTask(${i})">${t.text}</span><button class="del-btn" onclick="delTask(${i})">X</button>`;
        list.appendChild(li);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function addTask() {
    const inp = document.getElementById('taskInput');
    if (!inp.value.trim()) return;
    tasks.push({ text: inp.value.trim(), done: false });
    inp.value = '';
    render();
}
function toggleTask(i) { tasks[i].done = !tasks[i].done; render(); }
function delTask(i) { tasks.splice(i, 1); render(); }
render();