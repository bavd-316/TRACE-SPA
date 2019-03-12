from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import (
    StringField, EmbeddedDocumentListField,
    EmbeddedDocumentField, ObjectIdField
)


class InstructorModel(EmbeddedDocument):
    firstname = StringField()
    middlename = StringField()
    lastname = StringField()


class TermModel(EmbeddedDocument):
    title = StringField()


class DataModel(EmbeddedDocument):
    question_id = StringField()
    question_abbrev = StringField()
    question_text = StringField()
    strongly_agree = StringField()
    agree = StringField()
    neutral = StringField()
    disagree = StringField()
    strongly_disagree = StringField()
    dont = StringField()
    mean = StringField()
    median = StringField()
    std_dev = StringField()
    response_count = StringField()
    response_rate = StringField()


class StatsModel(EmbeddedDocument):
    enrollment = StringField()
    declines = StringField()
    responses = StringField()


class SemesterModel(EmbeddedDocument):
    semester = StringField()
    year = StringField()
    courses = StringField()


class RoleModel(EmbeddedDocument):
    level = StringField()
    label = StringField()


class ReportModel(Document):
    meta = {'collection': 'reports'}
    _id = ObjectIdField()
    id = StringField()
    instructor = EmbeddedDocumentField(InstructorModel)
    term = EmbeddedDocumentField(TermModel)
    name = StringField()
    subject = StringField()
    number = StringField()
    section = StringField()
    stats = EmbeddedDocumentField(StatsModel)
    data = EmbeddedDocumentListField(DataModel)


class UserModel(Document):
    meta = {'collection': 'users'}
    _id = ObjectIdField()
    first_name = StringField()
    last_name = StringField()
    nu_id = StringField()
    terms = EmbeddedDocumentListField(SemesterModel)
    role = EmbeddedDocumentField(RoleModel)
