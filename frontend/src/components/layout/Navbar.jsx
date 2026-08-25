import { useLocation } from "react-router-dom";

const titles = {
  "/": "Dashboard",
  "/prediction": "Loan Prediction",
  "/model": "Model Details",
  "/results": "Model Results",
};

function Navbar() {
  const location = useLocation();

  const title = titles[location.pathname] || "LoanPredict";

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div>
        <h2 className="text-lg font-bold text-slate-900">{title}</h2>

        <p className="mt-0.5 text-xs text-slate-500">
          Loan Default Prediction System
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* API Status */}
        <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 sm:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />

          <span className="text-xs font-medium text-emerald-700">
            API Connected
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
            ML
          </div>

          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-slate-800">ML Project</p>

            <p className="text-[10px] text-slate-500">Decision Tree</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
