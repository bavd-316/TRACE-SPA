from . import db


class ModelQuestionText(db.Model):
    __tablename__ = 'lookup_questiontext'

    id = db.Column(db.Integer, primary_key=True)
    abbrev = db.Column(db.Unicode(250))
    text = db.Column(db.Unicode(500))
