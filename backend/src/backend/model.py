from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parents[2]
MODEL_DIR = BASE_DIR / "models"

MODEL_PATH = MODEL_DIR / "Loan_Default.pkl"
SCALER_PATH = MODEL_DIR / "Scaler.pkl"

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)