import { useState } from "react";
import TasksForm from "./TasksForm";
import TaskList from "./TaskList";

function Tasks() {
    const [tasks, setTasks] = useState([]);

    function addTask(task) {
        setTasks([...tasks, task]);
    }

    return (
        <div className="min-h-screen bg-white p-5 text-black">
            <div className="max-w-3xl border-4 border-black p-8">
                <div className="mb-8 border-4 border-black p-4">
                    <TasksForm addTask={addTask} />
                </div>

                <TaskList tasks={tasks} />
            </div>
        </div>
    );
}

export default Tasks;