from mongoengine.fields import (
    StringField, FloatField, EmbeddedDocumentListField,
    IntField, ReferenceField, ListField, EmailField
)
from mongoengine.document import EmbeddedDocument, Document


class Question(EmbeddedDocument):
    qid = IntField(required=True)
    abbrev = StringField(required=True)
    text = StringField(required=True)
    strongly_agree = IntField(required=True)
    agree = IntField(required=True)
    neutral = IntField(required=True)
    disagree = IntField(required=True)
    strongly_disagree = IntField(required=True)
    dont = IntField(required=True)
    count = IntField(required=True)
    rate = FloatField(required=True)


class Instructor(Document):
    meta = {'indexes': [
        {'fields': ['first_name', 'last_name']}
    ]}
    first_name = StringField(required=True)
    middle_name = StringField()
    last_name = StringField(required=True)


class Term(Document):
    meta = {'indexes': [
        {'fields': ['year', 'semester']}
    ]}
    year = IntField(required=True)
    semester = StringField(required=True)


class CourseReport(Document):
    meta = {'indexes': [
        {'fields': ['crn']},
        {'fields': ['subject', 'num']}
    ]}
    term = ReferenceField(Term)
    crn = IntField(required=True, unique=True)
    name = StringField(required=True)
    subject = StringField(required=True)
    num = IntField(required=True)
    section = IntField(required=True)
    enrollment = IntField(required=True)
    declines = IntField(required=True)
    responses = IntField(required=True)
    instructor = ReferenceField(Instructor, required=True)
    data = EmbeddedDocumentListField(Question, required=True)


class StudentTerm(EmbeddedDocument):
    term = ReferenceField(Term)
    courses = ListField(ReferenceField(CourseReport))


class Student(Document):
    first_name = StringField()
    last_name = StringField()
    email = EmailField()
    nu_id = StringField()
    terms = EmbeddedDocumentListField(StudentTerm)
