export default function TaskStats({ tasks }) {

    const total = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    const pending = total - completed;

    return (

        <div className="grid grid-cols-3 gap-4 mt-8">

            <div className="bg-slate-800 rounded-lg p-4 text-center">

                <h2 className="text-gray-400">Total</h2>

                <p className="text-3xl font-bold">{total}</p>

            </div>

            <div className="bg-green-700 rounded-lg p-4 text-center">

                <h2>Completed</h2>

                <p className="text-3xl font-bold">{completed}</p>

            </div>

            <div className="bg-yellow-600 rounded-lg p-4 text-center">

                <h2>Pending</h2>

                <p className="text-3xl font-bold">{pending}</p>

            </div>

        </div>

    );

}