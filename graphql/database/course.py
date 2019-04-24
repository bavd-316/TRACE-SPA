from . import db


class ModelCourse(db.Model):
    __tablename__ = 'course'

    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, nullable=False)
    instructor_id = db.Column(db.Integer, db.ForeignKey('instructor.id'), nullable=False)
    term_id = db.Column(db.Integer, db.ForeignKey('term.id'), nullable=False)
    name = db.Column(db.Unicode(500), nullable=False)
    subject = db.Column(db.Unicode(50), nullable=False)
    number = db.Column(db.Integer, nullable=False)
    section = db.Column(db.Unicode(20))
    crn = db.Column(db.Unicode(20))

    instructor = db.relationship('ModelInstructor', lazy='noload')
    term = db.relationship('ModelTerm', lazy='noload')
    score_data = db.relationship('ModelScoreData', back_populates='report', uselist=False)

    @classmethod
    def get_course(cls, id):
        return cls.query.get(id)

    def as_dict(self):
        fks = [fk.column.name for fk in self.__table__.foreign_keys]
        columns = {c.name: getattr(self, c.name) for c in self.__table__.columns
                   if c.name not in fks}
        columns['instructor'] = self.instructor.as_dict()
        columns['term'] = self.term.as_dict()
        # columns['department'] = self.department.as_dict()
        return columns
