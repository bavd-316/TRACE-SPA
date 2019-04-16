from .base import Base
from sqlalchemy import Column, Integer, ForeignKey, Float
from sqlalchemy.orm import relationship


class ModelQuestion(Base):
    __tablename__ = 'Answer'

    id = Column(Integer, primary_key=True)
    text_id = Column(ForeignKey('Lookup_AnswerText.id'),
                          nullable=False)
    question_id = Column(ForeignKey('Question.id'), nullable=False)
    value = Column(Integer, nullable=False)

    lookup_text = relationship('LookupAnswerText', lazy='joined')
    question = relationship('Question', back_populates="Answers")