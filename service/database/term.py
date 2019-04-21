from . import db


class ModelTerm(db.Model):
    __tablename__ = 'term'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Unicode(200), nullable=False)

    @property
    def normal_title(self):
        return self.title.split(":")[-1].strip().replace(' - ', ' ')
