import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const SidebarLayout = () => {
  return (
    <div className="flex h-full overflow-hidden">

      {/* Sidebar */}
      <aside className="h-full shrink-0">
        <Sidebar />
      </aside>

      {/* Scrollable content, scrollbar hidden */}
      <main
        className="
          min-w-0 flex-1 overflow-y-auto
          [-ms-overflow-style:none]
          scrollbar-none
          [&::-webkit-scrollbar]:hidden
        "
      >
        <Outlet />
      </main>

    </div>
  );
};

export default SidebarLayout;