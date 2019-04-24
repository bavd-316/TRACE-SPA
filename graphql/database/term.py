from .base import Base
from sqlalchemy import Column, Integer, Unicode

class ModelTerm(Base):
    __tablename__ = 'Term'

    id = Column(Integer, primary_key=True)
    title = Column(Unicode(200), nullable=False)

    @property
    def normal_title(self):
        return self.title.split(":")[-1].strip().replace(' - ', ' ')