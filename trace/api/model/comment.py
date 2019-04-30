from sqlalchemy import Column, Integer, Unicode, ForeignKey

from trace.api import db
from trace.api.model.mixins import Dictable


class Comment(db.Model, Dictable):
    __tablename__ = 'comment'

    id = Column(Integer, primary_key=True)
    text = Column(Unicode)
    report_id = Column(Integer, ForeignKey('course.id'), nullable=False)
