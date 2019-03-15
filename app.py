from pipeline import db_connect
from flask import Flask
from flask_graphql import GraphQLView
from schema import schema

app = Flask(__name__)
app.debug = True
db_connect()

default_query = '''
{
  allReports {
    edges {
      node {
        id,
        instructor {
          firstname,
          lastname,
          middlename
        },
        term {
          id,
          title
        },
        name,
        subject,
        number,
        section,
        enrollment,
        declines,
        responses,
        data {
          question_id,
          question_abbrev,
          question_text,
          strongly_agree,
          agree,
          neutral,
          disagree,
          strongly_disagree,
          dont,
          mean,
          median,
          std_dev,
          response_count,
          response_rate
        }
      }
    }
  },
  instructor {
    firstname
    middlename
    lastname
  }
}'''.strip()

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql',
                                  schema=schema,
                                  graphiql=True)
)

if __name__ == '__main__':
    app.run()
