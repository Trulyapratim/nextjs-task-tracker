
"use client";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className="min-h-screen bg-slate-900 text-white py-10">

      <div className="max-w-4xl mx-auto px-5">

        <Header />

        <TaskStats tasks={tasks} />

        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
        />

        <h2 className="text-3xl font-bold mt-10 mb-6">
          Your Tasks
        </h2>

        <TaskList
          tasks={tasks}
          setTasks={setTasks}
        />

      </div>

    </main>
  );
}

