import { useState } from "react";

function TasksForm({ addTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim() === "") {
            return;
        }

        addTask(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8 flex gap-4">
            <input
                type="text"
                placeholder="Task name"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-64 border-4 border-black p-3"
            />

            <button
                type="submit"
                className="border-4 border-black px-6 py-2 hover:bg-gray-200"
            >
                Додати
            </button>
        </form>
    );
}

export default TasksForm;
