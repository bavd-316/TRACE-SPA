from . import db


class ModelAnswer(db.Model):
    __tablename__ = 'answer'

    id = db.Column(db.Integer, primary_key=True)
    answer_text_id = db.Column(db.Integer, db.ForeignKey('lookup_answertext.id'), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'), nullable=False)
    value = db.Column(db.Integer, nullable=False)

    lookup_answertext = db.relationship('ModelAnswerText', lazy='joined')
    question = db.relationship('ModelQuestion', back_populates="answers")
