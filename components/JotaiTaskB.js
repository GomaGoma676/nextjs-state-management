import { selectedTask } from "../store/atoms";
import { useAtom } from "jotai";

const jotaiTaskB = () => {
  const [, setTask] = useAtom(selectedTask);
  console.log("rendered JotaiTaskB");

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="mb-5 font-bold">JotaiTaskB</p>
      <button
        className="mt-3 py-1 px-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
        onClick={() => setTask({ id: 1, title: "task A" })}
      >
        Set task
      </button>
      <button
        className="mt-3 py-1 px-2 text-white bg-yellow-600 hover:bg-yellow-700 rounded"
        onClick={() => setTask({ id: 0, title: "" })}
      >
        Reset
      </button>
    </div>
  );
};

export default jotaiTaskB;
