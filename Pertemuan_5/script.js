document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.querySelector('#todoForm');
    const taskInput = document.querySelector('#taskInput');
    const inputError = document.querySelector('#inputError');
    const pesanError = document.querySelector('#pesanError');
    const todoList = document.querySelector('#todoList');
    const taskCounter = document.querySelector('#taskCounter');
    const clearCompletedBtn = document.querySelector('#clearCompletedBtn');

    // Mengambil data tugas dari LocalStorage
    const getTasks = () => {
        return JSON.parse(localStorage.getItem('todo_tasks')) || [];
    };

    // Menyimpan data tugas ke LocalStorage
    const saveTasks = (tasks) => {
        localStorage.setItem('todo_tasks', JSON.stringify(tasks));
    };

    // Memperbarui jumlah tugas
    const updateCounter = (tasks) => {
        const total = tasks.length;
        const selesai = tasks.filter(task => task.completed).length;
        const belumSelesai = total - selesai;

        taskCounter.textContent =
            `Total: ${total} Tugas | Selesai: ${selesai} | Belum Selesai: ${belumSelesai}`;
    };

    // Menampilkan daftar tugas
    const renderTasks = () => {
        const tasks = getTasks();
        todoList.innerHTML = '';

        // Penghitung selalu diperbarui
        updateCounter(tasks);

        if (tasks.length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.className = 'empty-state';
            emptyMessage.textContent = 'Belum ada tugas tersimpan.';
            todoList.appendChild(emptyMessage);
            return;
        }

        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${task.completed ? 'completed' : ''}`;

            const taskText = document.createElement('span');
            taskText.className = 'todo-text';
            taskText.textContent = task.text;

            const actions = document.createElement('div');
            actions.className = 'todo-actions';

            const completeBtn = document.createElement('button');
            completeBtn.type = 'button';
            completeBtn.className = 'action-btn complete-btn';
            completeBtn.dataset.index = index;
            completeBtn.textContent = task.completed ? 'Batal' : 'Selesai';

            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'action-btn delete-btn';
            deleteBtn.dataset.index = index;
            deleteBtn.textContent = 'Hapus';

            actions.append(completeBtn, deleteBtn);
            li.append(taskText, actions);
            todoList.appendChild(li);
        });
    };

    // Menambahkan tugas baru
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        const tasks = getTasks();

        // Validasi panjang teks
        if (taskText.length < 3) {
            taskInput.classList.add('error');
            inputError.style.display = 'block';
            pesanError.style.display = 'none';
            taskInput.focus();
            return;
        }

        inputError.style.display = 'none';
        taskInput.classList.remove('error');

        // Maksimal 5 tugas
        if (tasks.length >= 5) {
            pesanError.style.display = 'block';
            taskInput.classList.add('error');
            taskInput.focus();
            return;
        }

        pesanError.style.display = 'none';
        taskInput.classList.remove('error');

        tasks.push({
            text: taskText,
            completed: false
        });

        saveTasks(tasks);
        taskInput.value = '';
        renderTasks();
    });

    // Tombol Selesai, Batal, dan Hapus
    todoList.addEventListener('click', (event) => {
        const button = event.target.closest('button');

        if (!button) return;

        const index = Number(button.dataset.index);
        const tasks = getTasks();

        if (Number.isNaN(index) || !tasks[index]) return;

        // Menandai tugas selesai atau belum selesai
        if (button.classList.contains('complete-btn')) {
            tasks[index].completed = !tasks[index].completed;
            saveTasks(tasks);
            renderTasks();
            return;
        }

        // Konfirmasi sebelum menghapus tugas
        if (button.classList.contains('delete-btn')) {
            const yakin = confirm(
                'Apakah Anda yakin ingin menghapus tugas ini?'
            );

            if (yakin) {
                tasks.splice(index, 1);
                saveTasks(tasks);
                renderTasks();
            }
        }
    });

    // Menghapus hanya tugas yang sudah selesai
    clearCompletedBtn.addEventListener('click', () => {
        const tasks = getTasks();

        const remainingTasks = tasks.filter(
            task => task.completed !== true
        );

        saveTasks(remainingTasks);
        renderTasks();
    });

    // Menampilkan data saat halaman pertama kali dibuka
    renderTasks();
});