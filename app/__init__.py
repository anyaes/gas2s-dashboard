# initialize flask app here
from app.plotly.dashboard import init_dashboard
from flask import Flask

def init_app():
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')
    
    with app.app_context():
        # import parts of flask app
        from . import routes

        # initialize plotly dashboard
        app = init_dashboard(app)

        app.config['TEMPLATES_AUTO_RELOAD'] = True
        app.config['DEBUG'] = True

        return app
    
