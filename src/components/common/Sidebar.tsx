import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Pagination",
    path: "/pagination",
  },
  {
    label: "Infinite Scroll",
    path: "/infinite-scroll",
  },
  {
    label: "Debouncing",
    path: "/debouncing",
  },
  {
    label: "Caching",
    path: "/caching",
  },
  {
    label: "Virtualization",
    path: "/virtualization",
  },
  {
    label: "Lazy Loading",
    path: "/lazy-loading",
  },
  {
    label: "Code Splitting",
    path: "/code-splitting",
  },
  {
    label: "WebSocket",
    path: "/websocket",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-slate-900 text-white p-6">
      <h1 className="text-xl font-bold mb-8">Frontend Playground</h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-blue-500" : "hover:bg-slate-800"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
