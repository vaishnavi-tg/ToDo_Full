import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="p-6 max-w-sm mx-auto mt-10 bg-white text-2xl text-gray-700 rounded-xl shadow-md space-y-4">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
      />

      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
      />

      <button
        onClick={async () => {
          const response = await fetch("http://localhost:3000/api/v1/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: title,
              description: description
            })
          });

          const json = await response.json();

          if (response.ok) {
            alert("Todo added");
          } else {
            alert("Error: " + json.msg);
          }
        }}
        className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md"
      >
        Add a ToDo
      </button>
    </div>
  );
}
