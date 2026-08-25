import React from "react";

const details = [
  ["Algorithm", "Decision Tree Classifier"],
  ["Problem", "Binary Classification"],
  ["Target Variable", "Default"],
  ["Input ID", "LoanID removed"],
  ["Categorical Encoding", "One-Hot Encoding"],
  ["Numerical Scaling", "StandardScaler"],
  ["Model Format", "Joblib / PKL"],
];

function ModelDetails() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Model Details</h1>

        <p className="mt-1 text-sm text-slate-500">
          Information about the trained loan default model.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
            ◈
          </div>

          <div>
            <p className="text-xs text-slate-500">Selected Algorithm</p>

            <h2 className="text-xl font-bold text-slate-900">
              Decision Tree Classifier
            </h2>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="font-semibold text-slate-900">Configuration</h2>

        <div className="mt-5 divide-y divide-slate-100">
          {details.map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-slate-500">{label}</span>

              <span className="text-sm font-semibold text-slate-900">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="font-semibold text-slate-900">ML Pipeline</h2>

        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {["Input", "Validation", "Encoding", "Scaling", "Decision Tree"].map(
            (step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {index + 1}
                </div>

                <span className="text-xs font-semibold text-slate-700">
                  {step}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default ModelDetails;
