import os
from trace.api import create_app
from flask_script import Manager
from trace.api.controller import api

app = create_app(os.getenv('APP_ENV') or 'dev')

# Loads all routes into Blueprint
from trace.api.controller import instructor_controller, report_controller, term_controller
app.register_blueprint(api)

app.app_context().push()

manager = Manager(app)


@manager.command
def run():
    app.run(debug=app.config.get('DEBUG'))


if __name__ == '__main__':
    manager.run()
