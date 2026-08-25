import React from "react";

function Results() {
  const metrics = [
    ["Accuracy", "--"],
    ["Precision", "--"],
    ["Recall", "--"],
    ["F1 Score", "--"],
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Model Results</h1>

        <p className="mt-1 text-sm text-slate-500">
          Evaluation metrics for the Decision Tree model.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map(([name, value]) => (
          <div
            key={name}
            className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs text-slate-500">{name}</p>

            <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex min-h-80 items-center justify-center rounded-2xl border border-slate-200 bg-white">
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-700">
              Confusion Matrix
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Will be connected to model results.
            </p>
          </div>
        </div>

        <div className="flex min-h-80 items-center justify-center rounded-2xl border border-slate-200 bg-white">
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-700">
              Feature Importance
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Will be connected to model results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
