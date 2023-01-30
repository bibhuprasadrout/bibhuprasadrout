import React from "react";
import ReactDom from "react-dom/client";
const App = () => {
  return (
    <>
      <p>Hi all!</p>
    </>
  );
};
ReactDom.createRoot(document.getElementById("root")).render(<App />);
export default App;
