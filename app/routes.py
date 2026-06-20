from flask import render_template
from flask import current_app as app
from flask import request, redirect, url_for, flash
from .utils.transactions import load_transactions, save_transactions

@app.route('/')
def home():
    transactions = load_transactions()
    return render_template(
        'home.html',
        title='Personal Gastos',
        description='Personal Finance Dashboard',
        template='home-template',
        body="This is the home page of the Personal Finance Dashboard.",
        transactions=transactions
    )

@app.route('/transactions/')
def transactions():
    transactions = load_transactions()
    return render_template(
        'transactions.html',
        title='Transactions',
        description='Personal Finance Dashboard',
        template='transactions-template',
        body="This is the transactions page of the Personal Finance Dashboard.",
        transactions=transactions
    )

@app.route('/transactions/upload', methods=['POST'])
def import_transactions():
    uploaded_file = request.files.get('csv_file')
    if not uploaded_file or uploaded_file.filename == '':
        flash('No selected file')
        return redirect(url_for('transactions'))
    save_transactions(uploaded_file)
    return redirect(url_for('transactions'))

