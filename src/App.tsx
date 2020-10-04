import React from "react";
import "./App.css";

import RecentMenu from "./systems/RecentMenu/RecentMenu";

import IconButton from "./components/common/Button/IconButton";

function App() {
  return (
    <div className="App">
      <RecentMenu />
      <IconButton icon="fas fa-plus" text="메뉴 추가하기"></IconButton>
    </div>
  );
}

export default App;
