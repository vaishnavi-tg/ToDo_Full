export function CreateTodo() {
    return (
        <div className="p-6 max-w-sm mx-auto mt-10 bg-white text-2xl text-grey-300 rounded-xl shadow-md space-y-4">
            <input type="text" placeholder="Title" className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
            /> <br /> <br />

            <input type="text" placeholder="Description" className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-400" /> <br /><br />

            <button className="w-full bg-black  text-white font-semibold py-2 px-4 rounded-md">Add a ToDo</button>
        </div>
    )
}