import os

from flask_sqlalchemy import SQLAlchemy

# Create database engine
db_name = "trace"
db_host = "nu-trace.clxfur70m41w.us-east-1.rds.amazonaws.com"
# db_host = "localhost"
db_cred = f"{os.getenv('USERNAME')}:{os.getenv('PASSWORD')}"
db_uri = f"mysql+mysqlconnector://{db_cred}@{db_host}:3306/{db_name}"

db = SQLAlchemy()
