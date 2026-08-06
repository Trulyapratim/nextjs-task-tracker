"use client";

import { useState } from "react";

export default function TaskForm({ tasks, setTasks }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
    setPriority("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-8 bg-slate-800 p-6 rounded-xl shadow-lg flex flex-col gap-5"
    >

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-slate-300 font-medium">
          Task Title
        </label>

        <input
          id="title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title..."
          className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white"
        />
      </div>

      <div className="flex flex-col gap-2">

        <label htmlFor="description" className="text-slate-300 font-medium">
          Description
        </label>

        <textarea
          id="description"
          rows={4}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your task..."
          className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white resize-none"
        />

      </div>

      <div className="flex flex-col gap-2">

        <label htmlFor="priority" className="text-slate-300 font-medium">
          Priority
        </label>

        <select
          id="priority"
          required
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white"
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

      </div>

      <button
        type="submit"
        className="mt-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
      >
        Add Task
      </button>

    </form>
  );
}