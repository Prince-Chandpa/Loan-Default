import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: "▦",
  },
  {
    name: "Prediction",
    path: "/prediction",
    icon: "✦",
  },
  {
    name: "Model Details",
    path: "/model",
    icon: "◈",
  },
  {
    name: "Results",
    path: "/results",
    icon: "▤",
  },
];

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">
          LD
        </div>

        <div>
          <h1 className="text-base font-bold text-slate-900">LoanPredict</h1>
          <p className="text-xs text-slate-500">ML Prediction System</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-[10px] font-bold tracking-widest text-slate-400">
          MAIN
        </p>

        <div className="space-y-1">
          {navigation.slice(0, 2).map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>

        <p className="mb-3 mt-8 px-3 text-[10px] font-bold tracking-widest text-slate-400">
          MODEL
        </p>

        <div className="space-y-1">
          {navigation.slice(2).map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-800">
                Model Ready
              </p>

              <p className="text-[10px] text-slate-500">Decision Tree</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ item }) {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
        ].join(" ")
      }>
      <span className="flex h-5 w-5 items-center justify-center text-base">
        {item.icon}
      </span>

      {item.name}
    </NavLink>
  );
}

export default Sidebar;
