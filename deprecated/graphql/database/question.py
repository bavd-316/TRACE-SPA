from sqlalchemy import Float

from . import db


class ModelQuestion(db.Model):
    __tablename__ = 'question'

    id = db.Column(db.Integer, primary_key=True)
    data_id = db.Column(db.Integer, db.ForeignKey('score_data.id'), nullable=False)
    question_text_id = db.Column(db.Integer, db.ForeignKey('lookup_questiontext.id'), nullable=False)
    response_count = db.Column(db.Integer, nullable=False)
    response_rate = db.Column(Float(53))
    mean = db.Column(db.Float(53))
    median = db.Column(db.Float(53))
    std_dev = db.Column(db.Float(53))

    score_data = db.relationship('ModelScoreData', back_populates="questions", lazy='noload')
    lookup_text = db.relationship('ModelQuestionText')
    answers = db.relationship('ModelAnswer', back_populates='question', lazy='joined')
