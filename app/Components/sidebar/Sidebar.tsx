import React from "react";
import SidebarForm from "./SidebarForm";

const Sidebar = () => {
  return (
    <div
      className="
        fixed 
        inset-y-0 
        left-0 
        z-40
        w-[420px]
        px-6
        overflow-y-auto
        bg-slate-100
        border-r-[1px]
        pb-4
        flex
        flex-col
        justify-between
      "
    >
      <nav
        className="
            mt-4
            flex
            flex-col
            justify-between
        "
      >
        <SidebarForm />
      </nav>
    </div>
  );
};

export default Sidebar;
