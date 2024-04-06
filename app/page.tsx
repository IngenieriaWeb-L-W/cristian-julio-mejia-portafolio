import React from "react";
import LeftMenu from "./components/menu/leftmenu";
import CenterContent from "./components/menu/centermenu";
import RightMenu from "./components/menu/rightmenu";

export default function Home() {
  return (
    <div className="flex">
      {/*Estutructura básica*/}
      <LeftMenu />
      <CenterContent />
      <RightMenu />
    </div>
  );
}
