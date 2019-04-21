from . import db


class ModelScoreData(db.Model):
    __tablename__ = 'score_data'

    id = db.Column(db.Integer, primary_key=True)
    report_id = db.Column(db.ForeignKey('course.id'))
    enrollment = db.Column(db.Integer)
    responses = db.Column(db.Integer)
    declines = db.Column(db.Integer)

    report = db.relationship('course', back_populates='score_data', uselist=False)
    questions = db.relationship('question', back_populates='score_data', lazy='joined')
