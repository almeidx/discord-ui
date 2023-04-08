import React from "react";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <Layout />

      {/* @ts-expect-error */}
      <GlobalStyles />
    </>
  );
}

export default App;
