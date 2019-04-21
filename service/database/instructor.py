from api import db


class ModelInstructor(db.Model):
    __tablename__ = 'instructor'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Unicode(255))
    last_name = db.Column(db.Unicode(255))
    middle_name = db.Column(db.Unicode(255))
