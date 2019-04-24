from .base import Base
from sqlalchemy import Column, Integer, ForeignKey, Unicode
from sqlalchemy.orm import relationship


class ModelReport(Base):
    __tablename__ = 'Report'

    id = Column(Integer, primary_key=True)
    course_id = Column(Integer, nullable=False)
    instructor_id = Column(ForeignKey('Instructor.id'), nullable=False)
    term_id = Column(ForeignKey('Term.id'), nullable=False)
    name = Column(Unicode(500), nullable=False)
    subject = Column(Unicode(50), nullable=False)
    number = Column(Integer, nullable=False)
    section = Column(Unicode(20))

    instructor = relationship('Instructor')
    term = relationship('Term')
    score_datum = relationship('ScoreDatum', back_populates='Report',
                               uselist=False)

    @property
    def course_full_name(self):
        return f"{self.subject}{self.number} {self.name}"
