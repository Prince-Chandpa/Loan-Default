import { useState } from "react";

const initialForm = {
  Age: "",
  Income: "",
  LoanAmount: "",
  CreditScore: "",
  MonthsEmployed: "",
  NumCreditLines: "",
  InterestRate: "",
  LoanTerm: "",
  DTIRatio: "",
  Education: "",
  EmploymentType: "",
  MaritalStatus: "",
  HasMortgage: "",
  HasDependents: "",
  LoanPurpose: "",
  HasCoSigner: "",
};

function Prediction() {
  const [form, setForm] = useState(initialForm);
  const [prediction, setPrediction] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setPrediction({
      label: "Prediction Ready",
      message: "FastAPI connection will be added next.",
    });
  };

  const resetForm = () => {
    setForm(initialForm);
    setPrediction(null);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Loan Default Prediction
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Enter applicant and loan information.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 xl:col-span-2">
          <form onSubmit={handleSubmit}>
            <FormSection title="Financial Information">
              <Input
                label="Age"
                name="Age"
                type="number"
                value={form.Age}
                onChange={handleChange}
                placeholder="Enter age"
              />

              <Input
                label="Income"
                name="Income"
                type="number"
                value={form.Income}
                onChange={handleChange}
                placeholder="Enter income"
              />

              <Input
                label="Loan Amount"
                name="LoanAmount"
                type="number"
                value={form.LoanAmount}
                onChange={handleChange}
                placeholder="Enter loan amount"
              />

              <Input
                label="Credit Score"
                name="CreditScore"
                type="number"
                value={form.CreditScore}
                onChange={handleChange}
                placeholder="300 - 850"
              />

              <Input
                label="Months Employed"
                name="MonthsEmployed"
                type="number"
                value={form.MonthsEmployed}
                onChange={handleChange}
                placeholder="Enter months"
              />

              <Input
                label="Number of Credit Lines"
                name="NumCreditLines"
                type="number"
                value={form.NumCreditLines}
                onChange={handleChange}
                placeholder="Enter number"
              />

              <Input
                label="Interest Rate"
                name="InterestRate"
                type="number"
                step="0.01"
                value={form.InterestRate}
                onChange={handleChange}
                placeholder="Enter rate"
              />

              <Input
                label="Loan Term"
                name="LoanTerm"
                type="number"
                value={form.LoanTerm}
                onChange={handleChange}
                placeholder="Enter term"
              />

              <Input
                label="DTI Ratio"
                name="DTIRatio"
                type="number"
                step="0.01"
                value={form.DTIRatio}
                onChange={handleChange}
                placeholder="Enter DTI ratio"
              />
            </FormSection>

            <FormSection title="Applicant Information">
              <Select
                label="Education"
                name="Education"
                value={form.Education}
                onChange={handleChange}
                options={["High School", "Bachelor's", "Master's", "PhD"]}
              />

              <Select
                label="Employment Type"
                name="EmploymentType"
                value={form.EmploymentType}
                onChange={handleChange}
                options={[
                  "Full-time",
                  "Part-time",
                  "Self-employed",
                  "Unemployed",
                ]}
              />

              <Select
                label="Marital Status"
                name="MaritalStatus"
                value={form.MaritalStatus}
                onChange={handleChange}
                options={["Single", "Married", "Divorced"]}
              />

              <Select
                label="Mortgage"
                name="HasMortgage"
                value={form.HasMortgage}
                onChange={handleChange}
                options={["Yes", "No"]}
              />

              <Select
                label="Dependents"
                name="HasDependents"
                value={form.HasDependents}
                onChange={handleChange}
                options={["Yes", "No"]}
              />

              <Select
                label="Loan Purpose"
                name="LoanPurpose"
                value={form.LoanPurpose}
                onChange={handleChange}
                options={["Home", "Auto", "Education", "Business", "Other"]}
              />

              <Select
                label="Co-Signer"
                name="HasCoSigner"
                value={form.HasCoSigner}
                onChange={handleChange}
                options={["Yes", "No"]}
              />
            </FormSection>

            <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                Reset
              </button>

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                Predict Default
              </button>
            </div>
          </form>
        </div>

        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 xl:sticky xl:top-24">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="font-semibold text-slate-900">
                Prediction Result
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Decision Tree Classifier
              </p>
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-600">
              ML
            </span>
          </div>

          {!prediction ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-400">
                ?
              </div>

              <h3 className="mt-5 font-semibold text-slate-900">
                No prediction yet
              </h3>

              <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                Fill in the loan information and click
                <strong> Predict Default </strong>
                to generate a result.
              </p>
            </div>
          ) : (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-xl text-emerald-600">
                ✓
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {prediction.label}
              </h3>

              <p className="mt-2 text-xs text-slate-500">
                {prediction.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FormSection({ title, children }) {
  return (
    <section className="mb-8">
      <div className="mb-5">
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
}

function Input({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold text-slate-700">
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50">
        <option value="">Select {label.toLowerCase()}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Prediction;
