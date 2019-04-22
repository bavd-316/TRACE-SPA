from . import db


class ModelInstructor(db.Model):
    __tablename__ = 'instructor'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Unicode(255))
    last_name = db.Column(db.Unicode(255))
    middle_name = db.Column(db.Unicode(255))

    @classmethod
    def get_instructor(cls, id):
        return cls.query.get(id)
    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}