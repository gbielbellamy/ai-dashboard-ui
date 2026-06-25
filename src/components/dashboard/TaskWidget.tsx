import { useState } from "react";
import { useDashboardStore } from "../../store/dashboardStore";

function TaskWidget() {
  const [newTask, setNewTask] = useState("");
  const { tasks, addTask, toggleTask, deleteTask } = useDashboardStore();

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="task-widget">
      <h3 className="chart-title">Active Tasks</h3>

      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input__field"
        />
        <button className="button button-primary" onClick={handleAddTask}>
          Add
        </button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks yet. Add one above!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="task-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? "task-text completed" : "task-text"}>
                {task.text}
              </span>
              <button
                className="task-delete"
                onClick={() => deleteTask(task.id)}
              >
               ✕
              </button>
            </li>
         ))
      )}
      </ul>
    </div>
  );
}

export default TaskWidget;
