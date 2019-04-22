import os

from flask_sqlalchemy import SQLAlchemy

# Create database engine
db_name = "trace"
db_host = "nu-trace.clxfur70m41w.us-east-1.rds.amazonaws.com"
# db_host = "localhost"
db_cred = f"{os.getenv('USERNAME')}:{os.getenv('PASSWORD')}"
db_uri = f"mysql+mysqlconnector://{db_cred}@{db_host}:3306/{db_name}"

db = SQLAlchemy()


from .answer import ModelAnswer
from .comment import ModelComment
from .course import ModelCourse
from .department import ModelDepartment
from .instructor import ModelInstructor
from .lookup_answertext import ModelAnswerText
from .lookup_questiontext import ModelQuestionText
from .question import ModelQuestion
from .score_data import ModelScoreData
from .term import ModelTerm