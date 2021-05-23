import { selectedTask } from "../store/atoms";
import { useAtom } from "jotai";

const JotaiTaskA = () => {
  const [task] = useAtom(selectedTask);
  console.log("rendered JotaiTaskA");

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="mb-5 font-bold">JotaiTaskA</p>
      {JSON.stringify(task, null, 2)}
    </div>
  );
};

export default JotaiTaskA;
