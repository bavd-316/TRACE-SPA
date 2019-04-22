from . import db


class ModelTerm(db.Model):
    __tablename__ = 'term'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Unicode(200), nullable=False)





    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}