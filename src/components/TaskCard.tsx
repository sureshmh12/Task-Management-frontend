import api from "../utils/axios";
import { useState } from "react";

export default function TaskCard({ task, refresh }: any) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const updateTask = async () => {
    await api.put(`/tasks/${task._id}`, { title });
    setEditing(false);
    refresh();
  };

  const deleteTask = async () => {
    await api.delete(`/tasks/${task._id}`);
    refresh();
  };

  return (
    <div className="p-4 border rounded flex justify-between items-center bg-white shadow">
      {editing ? (
        <input
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p>{task.title}</p>
      )}

      <div className="flex gap-2 text-sm">
        {editing ? (
          <button onClick={updateTask} className="text-green-600">
            Save
          </button>
        ) : (
          <button onClick={() => setEditing(true)} className="text-blue-600">
            Edit
          </button>
        )}

        <button onClick={deleteTask} className="text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
