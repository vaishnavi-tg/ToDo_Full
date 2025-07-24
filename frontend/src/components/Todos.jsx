export function Todos({ todos, onComplete }) {
    return (
        <div className="max-w-xl mx-auto mt-10 space-y-6">
            {todos.map(function (todo) {
                return (
                    <div key={todo._id} className="p-4 bg-white shadow-md rounded-md border border-gray-200">
                        <h1 className="text-xl font-bold text-gray-800">{todo.title}</h1>
                        <h2 className="text-xl font-bold text-gray-800">{todo.description}</h2>
                        <button
                            onClick={() => onComplete(todo._id)}
                            disabled={todo.completed}
                            className="px-4 py-2 rounded-md text-white font-medium bg-blue-600 disabled:bg-gray-400"
                        >
                            {todo.completed ? "Completed" : "Mark as Complete"}
                        </button>
                    </div>
                )
            })}
        </div>
    );
}
