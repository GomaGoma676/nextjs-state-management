import { useAtom } from "jotai";
import { isDark } from "../store/atoms";

const JotaiDarkA = () => {
  const [dark, setDark] = useAtom(isDark);
  console.log("rendered jotaiA");

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="mb-5 font-bold">JotaiDarkA</p>
      <p className="text-blue-500">{dark ? "on" : "off"}</p>
      <button
        className="mt-3 py-1 px-2 text-white bg-green-600 hover:bg-green-700 rounded"
        onClick={() => setDark(!dark)}
      >
        toggle
      </button>
    </div>
  );
};

export default JotaiDarkA;
