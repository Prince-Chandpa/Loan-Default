from pydantic import BaseModel, Field

class LoanRequest(BaseModel):
    Age: int = Field(..., ge=18, le=100)
    Income: float = Field(..., ge=0)
    LoanAmount: float = Field(..., ge=100)
    CreditScore: int = Field(..., ge=300, le=850)
    MonthsEmployed: int = Field(..., ge=0, le=600)
    NumCreditLines: int = Field(..., ge=1, le=50)
    InterestRate: float = Field(..., ge=0)
    LoanTerm: int = Field(..., ge=1)
    DTIRatio: float = Field(..., ge=0)
    
    Education: str
    EmploymentType: str
    MaritalStatus: str
    HasMortgage: str
    HasDependents: str
    LoanPurpose: str
    HasCoSigner: str