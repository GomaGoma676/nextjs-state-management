import { isDark } from "../store/atoms";
import { useAtom } from "jotai";

const JotaiDarkB = () => {
  const [dark] = useAtom(isDark);
  console.log("rendered jotaiB");

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="mb-5 font-bold">JotaiDarkB</p>
      <p className="text-blue-500">{dark ? "on" : "off"}</p>
    </div>
  );
};

export default JotaiDarkB;
