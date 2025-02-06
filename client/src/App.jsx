import React from "react";
import { Testing } from "./pages/Testing";
import { setAxiosDefaults } from "./utils/axiosConfig";

const App = () => {
  setAxiosDefaults();
  return (
    <div>
      <Testing />
    </div>
  );
};

export default App;
