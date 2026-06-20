from pathlib import Path
import pandas as pd

DATA_PATH = Path(__file__).resolve().parents[1] / "data" / "transactions.csv"

def load_transactions():
    df = pd.read_csv(DATA_PATH, parse_dates=["Date"])
    df = df.sort_values("Date", ascending=False)
    return df.to_dict("records")

def save_transactions(file):
    print(file)
    df = pd.read_csv(file, parse_dates=["Date"])
    df.to_csv(DATA_PATH, index=False)