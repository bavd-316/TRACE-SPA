from . import db


class ModelDepartment(db.Model):
    __tablename__ = 'department'

    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.Unicode(10))
    title = db.Column(db.Unicode(100))
