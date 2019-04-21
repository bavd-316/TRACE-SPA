from flask import Flask

from database import db, db_uri

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

from flask_graphql import GraphQLView
from schema import schema

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True)
)
if __name__ == '__main__':
    app.run(threaded=True)
