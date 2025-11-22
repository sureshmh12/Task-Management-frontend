import { useForm } from "react-hook-form";
import api from "../utils/axios";

export default function TaskForm({ refresh }: any) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    await api.post("/tasks", data);
    reset();
    refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 items-center">
      <input
        {...register("title")}
        placeholder="Task title"
        className="flex-1 p-2 border rounded"
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}
