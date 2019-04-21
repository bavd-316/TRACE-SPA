from sqlalchemy import Float

from . import db


class ModelQuestion(db.Model):
    __tablename__ = 'question'

    id = db.Column(db.Integer, primary_key=True)
    data_id = db.Column(db.ForeignKey('score_data.id'), nullable=False)
    text_id = db.Column(db.ForeignKey('lookup_questiontext.id'), nullable=False)
    response_count = db.Column(db.Integer, nullable=False)
    response_rate = db.Column(Float(53), nullable=False)
    mean = db.Column(db.Float(53), nullable=False)
    median = db.Column(db.Float(53), nullable=False)
    std_dev = db.Column(db.Float(53), nullable=False)

    score_datum = db.relationship('scoredatum', back_populates="Questions")
    lookup_text = db.relationship('lookup_questiontext', lazy='joined')
    answers = db.relationship('answer', back_populates='question', lazy='joined')
