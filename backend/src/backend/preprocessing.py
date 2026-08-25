import pandas as pd

from .model import scaler

MODEL_FEATURES = [
    "Age",
    "Income",
    "LoanAmount",
    "CreditScore",
    "MonthsEmployed",
    "NumCreditLines",
    "InterestRate",
    "LoanTerm",
    "DTIRatio",
    "Education_High School",
    "Education_Master's",
    "Education_PhD",
    "EmploymentType_Part-time",
    "EmploymentType_Self-employed",
    "EmploymentType_Unemployed",
    "MaritalStatus_Married",
    "MaritalStatus_Single",
    "HasMortgage_Yes",
    "HasDependents_Yes",
    "LoanPurpose_Business",
    "LoanPurpose_Education",
    "LoanPurpose_Home",
    "LoanPurpose_Other",
    "HasCoSigner_Yes",
]

def preprocess_input(data: dict):
    df = pd.DataFrame([data])

    df = pd.get_dummies(
        df,
        columns=[
            "Education",
            "EmploymentType",
            "MaritalStatus",
            "HasMortgage",
            "HasDependents",
            "LoanPurpose",
            "HasCoSigner",
        ],
        drop_first=True,    
    )

    df = df.reindex(columns=MODEL_FEATURES, fill_value=0)

    scaled_data = scaler.transform(df)

    return scaled_data