from fastapi import FastAPI

from .model import model
from .preprocessing import preprocess_input
from .schemas import LoanRequest

app = FastAPI(
    title="Loan Default Prediction API",
    description="FastAPI backend for Loan Default Prediction",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Loan Default Prediction API is running" 
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }

@app.post("/predict")
def predict(request: LoanRequest):
    input_data = request.model_dump()

    processed_data = preprocess_input(input_data)

    prediction = model.predict(processed_data)[0]

    probability = model.predict_proba(processed_data)[0]

    return {
        "prediction": int(prediction),
        "probability": float(probability[int(prediction)]),
    }