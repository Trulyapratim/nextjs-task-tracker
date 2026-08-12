"use client";

import { useEffect, useRef, useState } from "react";

export default function TaskCard({ task, tasks, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editPriority, setEditPriority] = useState(task.priority);
  const titleRef = useRef(null);

  useEffect(() => {
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditPriority(task.priority);
  }, [task]);

  useEffect(() => {
    if (isEditing) {
      titleRef.current?.focus();
    }
  }, [isEditing]);

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      })
    );
  }

  function saveTask() {
    setTasks(
      tasks.map((currentTask) =>
        currentTask.id === task.id
          ? {
              ...currentTask,
              title: editTitle,
              description: editDescription,
              priority: editPriority,
            }
          : currentTask
      )
    );
    setIsEditing(false);
  }

  function cancelEdit() {
    setIsEditing(false);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditPriority(task.priority);
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className="bg-slate-800 rounded-xl p-5 shadow-lg border border-slate-700 cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div className="w-full">
          {isEditing ? (
            <div className="space-y-4">
              <input
                ref={titleRef}
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white"
              />

              <textarea
                rows={3}
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white resize-none"
              />

              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          ) : (
            <>
              <h2
                className={`text-xl font-bold ${
                  task.completed ? "line-through text-gray-500" : "text-white"
                }`}
              >
                {task.title}
              </h2>

              <p className="text-gray-400 mt-2">{task.description}</p>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium
                  ${
                    task.priority === "High"
                      ? "bg-red-600"
                      : task.priority === "Medium"
                      ? "bg-yellow-500 text-black"
                      : "bg-green-600"
                  }`}
              >
                {task.priority}
              </span>
            </>
          )}
        </div>

        <span className="text-2xl ml-4">{task.completed ? "✅" : "⏳"}</span>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleTask(task.id);
          }}
          className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        {isEditing ? (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                saveTask();
              }}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg"
            >
              Save
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                cancelEdit();
              }}
              className="bg-slate-600 hover:bg-slate-500 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg"
          >
            Edit
          </button>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
          className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
