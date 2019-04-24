from .base import Base
from sqlalchemy import Column, Integer, ForeignKey, Float
from sqlalchemy.orm import relationship


class ModelQuestion(Base):
    __tablename__ = 'Question'

    id = Column(Integer, primary_key=True)
    data_id = Column(ForeignKey('ScoreData.id'), nullable=False)
    text_id = Column(ForeignKey('Lookup_QuestionText.id'),
                            nullable=False)
    response_count = Column(Integer, nullable=False)
    response_rate = Column(Float(53), nullable=False)
    mean = Column(Float(53), nullable=False)
    median = Column(Float(53), nullable=False)
    stddev = Column(Float(53), nullable=False)

    score_datum = relationship('ScoreDatum', back_populates="Questions")
    lookup_text = relationship('LookupQuestionText', lazy='joined')
    answers = relationship('Answer', back_populates='Question', lazy='joined')