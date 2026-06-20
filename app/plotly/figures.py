import plotly.express as px
import pandas as pd
import dash_ag_grid as dag

df = pd.read_csv('data/trasactions.csv', nrows=1)
headers = list(df.columns)

print(headers)

def transaction_table():
    pass

def balance_overview():
    pass