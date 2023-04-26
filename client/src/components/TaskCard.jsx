/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        // eslint-disable-next-line react/prop-types
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{task.title}</h1>
      <p className="text-slade-400">{task.description}</p>
    </div>
  );
}
