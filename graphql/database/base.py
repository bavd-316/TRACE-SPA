from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker
import os

# Create database engine
db_name = "trace"
db_host = "nu-trace.clxfur70m41w.us-east-1.rds.amazonaws.com"
db_cred = f"{os.getenv('USERNAME')}:{os.getenv('PASSWORD')}"
db_uri = f"mysql+pymysql://{db_cred}@{db_host}:3306/{db_name}"
engine = create_engine(db_uri, convert_unicode=True)

Base = declarative_base()
Base.metadata.bind = engine

db_session = scoped_session(sessionmaker(bind=engine, expire_on_commit=False))
Base.query = db_session.query_property()