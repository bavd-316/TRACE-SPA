from .base import Base
from sqlalchemy import Column, Integer, Unicode


class ModelInstructor(Base):
    __tablename__ = 'Instructor'

    id = Column(Integer, primary_key=True)
    firstname = Column(Unicode(255), nullable=False)
    lastname = Column(Unicode(255), nullable=False)
    middlename = Column(Unicode(255), nullable=True)

    @property
    def id(self):
        raise AttributeError('id: write-only field')

    @property
    def email(self):
        raise AttributeError('email: write-only field')

    @property
    def student_id(self):
        raise AttributeError('student_id: write-only field')

    @property
    def full_name(self):
        return ' '.join(filter(lambda x: x is not None and x.strip(),
                               [self.firstname, self.lastname]))
