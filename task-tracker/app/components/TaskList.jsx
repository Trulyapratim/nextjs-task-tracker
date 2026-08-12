"use client";

import TaskCard from "./TaskCard";

export default function TaskList({ tasks, setTasks }) {
  if (tasks.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-400">
        <p className="text-xl">No tasks yet 📋</p>
        <p>Create your first task above.</p>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}
