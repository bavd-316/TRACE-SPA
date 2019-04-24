from . import db


class ModelAnswerText(db.Model):
    __tablename__ = 'lookup_answertext'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Unicode(500))
