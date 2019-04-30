from sqlalchemy import Column, Integer, Unicode

from trace.api import db
from trace.api.model.mixins import Dictable


class Department(db.Model, Dictable):
    __tablename__ = 'department'

    id = Column(Integer, primary_key=True)
    code = Column(Unicode(10))
    title = Column(Unicode(100))
