export default function TaskCard({ task, tasks, setTasks }) {

  function deleteTask(id){

    setTasks(
      tasks.filter((task)=>task.id!==id)
    )

  }

  function toggleTask(id){

    setTasks(

      tasks.map((task)=>{

        if(task.id===id){

          return{

            ...task,
            completed:!task.completed

          }

        }

        return task;

      })

    )

  }

  return (
    <div className="bg-slate-800 rounded-xl p-5 shadow-lg border border-slate-700">
      <div className="flex justify-between items-start">
        <div>
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
        </div>

        <span className="text-2xl">{task.completed ? "✅" : "⏳"}</span>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => toggleTask(task.id)}
          className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
