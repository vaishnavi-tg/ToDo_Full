export function Todos({todos}){
    return (
        <div className="max-w-xl mx-auto mt-10 space-y-6">
            {todos.map(function(todo){
                return <div className="p-4 bg-white shadow-md rounded-md border border-gray-200">
                    <h1 className="text-xl font-bold text-gray-800">{todo.title}</h1>
                    <h2 className="text-xl font-bold text-gray-800">{todo.description}</h2>
                    <button px-4 py-2 rounded-md text-white font-medium>{todo.completed==true?"completed":"Mark as Complete"}</button>
                </div>
            })}
        </div>
    )
}