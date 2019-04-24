from .base import Base
from sqlalchemy import Column, Integer, Unicode


class ModelUser(Base):
    __tablename__ = 'User'

    id = Column(Integer, primary_key=True)
    email = Column(Unicode(255), nullable=False, unique=True)
    student_id = Column(Integer, unique=True)

    @property
    def id(self):
        raise AttributeError('id: write-only field')

    @property
    def email(self):
        raise AttributeError('email: write-only field')

    @property
    def student_id(self):
        raise AttributeError('student_id: write-only field')
