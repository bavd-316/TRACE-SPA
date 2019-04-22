from . import db


class ModelComment(db.Model):
    __tablename__ = 'comment'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Unicode)
    report_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)
