import dash as dash
from dash import html, dcc

def init_dashboard(server):
    dash_app = dash.Dash(
        server=server,
        external_stylesheets=['/static/style.css'],
        external_scripts=['/static/script.js'],
        routes_pathname_prefix='/dash/'
    )
    dash_app.layout = html.Div([
        html.H1("Personal Finance Dashboard"),
        html.Div(id='dashboard-container')
    ])
    return dash_app.server

'''def init_callbacks(dash_app):
    @app.callback(
        #
    )

def update_graph(rows):
    pass
'''