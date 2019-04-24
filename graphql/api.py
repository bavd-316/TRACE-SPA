from flask import Flask
from database import db, db_uri

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
db.init_app(app)

from flask_graphql import GraphQLView
from schema import schema
app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True)
)
app.add_url_rule('/graphql/batch', view_func=GraphQLView.as_view('/graphql', schema=schema, batch=True))

@app.route('/')
def hello_world():
    return "Hello, World"

@app.route('/scores/<int:report_id>')
def get_scores(report_id):
    Model

if __name__ == '__main__':
    app.run(threaded=True)
