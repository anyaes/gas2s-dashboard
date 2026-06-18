from flask import render_template
from flask import current_app as app

@app.route('/')
def home():
    return render_template(
        'home.html',
        title='Personal Gastos',
        description='Personal Finance Dashboard',
        template='home-template',
        body="This is the home page of the Personal Finance Dashboard."
    )