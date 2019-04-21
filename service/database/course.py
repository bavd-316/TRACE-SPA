from . import db


class ModelCourse(db.Model):
    __tablename__ = 'course'

    report_id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, nullable=False)
    instructor_id = db.Column(db.ForeignKey('instructor.id'), nullable=False)
    term_id = db.Column(db.ForeignKey('term.id'), nullable=False)
    name = db.Column(db.Unicode(500), nullable=False)
    subject = db.Column(db.Unicode(50), nullable=False)
    number = db.Column(db.Integer, nullable=False)
    section = db.Column(db.Unicode(20))
    crn = db.Column()

    instructor = db.relationship('instructor')
    term = db.relationship('term')
    score_datum = db.relationship('score_data', back_populates='course',
                                  uselist=False)

    @property
    def course_full_name(self):
        return f"{self.subject}{self.number} {self.name}"
