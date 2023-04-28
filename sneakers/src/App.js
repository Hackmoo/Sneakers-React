import React from "react";

import {Header, GoodsList, SidebarCart} from './components/index'

function App() {
  return (
    <div className="wrapper">
      {/* <SidebarCart/> */}
      <Header />
      <GoodsList />
    </div>
  );
}

export default App;
