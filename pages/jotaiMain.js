import React from "react";
import JotaiDarkA from "../components/jotaiDarkA";
import JotaiDarkB from "../components/JotaiDarkB";
import JotaiTaskA from "../components/JotaiTaskA";
import JotaiTaskB from "../components/JotaiTaskB";
import Layout from "../components/Layout";

const jotaiMain = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-40">
        <JotaiDarkA />
        <JotaiDarkB />
        <JotaiTaskA />
        <JotaiTaskB />
      </div>
    </Layout>
  );
};

export default jotaiMain;
