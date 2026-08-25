import { Link } from "react-router-dom";

const features = [
  "Age",
  "Income",
  "Loan Amount",
  "Credit Score",
  "Months Employed",
  "Credit Lines",
  "Interest Rate",
  "Loan Term",
  "DTI Ratio",
  "Education",
  "Employment Type",
  "Marital Status",
  "Mortgage",
  "Dependents",
  "Loan Purpose",
  "Co-Signer",
];

const modelDetails = [
  ["Algorithm", "Decision Tree Classifier"],
  ["Problem Type", "Binary Classification"],
  ["Target", "Default"],
  ["Encoding", "One-Hot Encoding"],
  ["Scaling", "StandardScaler"],
  ["Model Format", "Joblib (.pkl)"],
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Loan Default Prediction
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Machine learning system for predicting loan default risk.
          </p>
        </div>

        <Link
          to="/prediction"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
          + New Prediction
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Model"
          value="Decision Tree"
          description="Classification algorithm"
          icon="◈"
        />

        <StatCard
          title="Target"
          value="Default"
          description="Loan default prediction"
          icon="Y"
        />

        <StatCard
          title="Input Features"
          value="16"
          description="Features after preprocessing"
          icon="16"
        />

        <StatCard
          title="Model Status"
          value="Ready"
          description="Available for prediction"
          icon="✓"
          success
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-3">
          <div className="mb-6">
            <h2 className="font-semibold text-slate-900">Model Overview</h2>

            <p className="mt-1 text-xs text-slate-500">
              Current machine learning configuration
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {modelDetails.map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">{label}</p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
          <div className="flex h-full flex-col">
            <div>
              <h2 className="font-semibold text-slate-900">
                Make a Prediction
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Use the trained Decision Tree model.
              </p>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600">
                ✦
              </div>

              <h3 className="font-semibold text-slate-900">Ready to predict</h3>

              <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                Enter applicant and loan information to generate a default
                prediction.
              </p>

              <Link
                to="/prediction"
                className="mt-5 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800">
                Go to Prediction
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="mb-5">
          <h2 className="font-semibold text-slate-900">Model Input Features</h2>

          <p className="mt-1 text-xs text-slate-500">
            Features used by the loan default prediction model.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, description, icon, success = false }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-slate-500">{title}</p>

        <span
          className={[
            "flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold",
            success
              ? "bg-emerald-50 text-emerald-600"
              : "bg-blue-50 text-blue-600",
          ].join(" ")}>
          {icon}
        </span>
      </div>

      <p className="mt-4 text-xl font-bold text-slate-900">{value}</p>

      <p className="mt-1 text-[11px] text-slate-500">{description}</p>
    </div>
  );
}

export default Dashboard;
