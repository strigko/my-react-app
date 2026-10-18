function TaskList({ tasks }) {
    return (
        <div>
            <h2 className="mb-2 text-lg">
                Task List
            </h2>

            <div className="min-h-48 border-4 border-black p-4">
                {tasks.length === 0 ? (
                    <p>No tasks rn</p>
                ) : (
                    <ul className="list-inside list-disc">
                        {tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TaskList;
