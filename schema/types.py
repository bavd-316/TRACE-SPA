from graphene.relay import Node
from graphene_mongo import MongoengineObjectType
from pipeline.models import (
    Question as QuestionModel,
    Instructor as InstructorModel,
    CourseReport as CourseReportModel,
    Term as TermModel,
    StudentTerm as StudentTermModel,
    Student as StudentModel
)


class Question(MongoengineObjectType):
    class Meta:
        model = QuestionModel
        interfaces = (Node,)


class Instructor(MongoengineObjectType):
    class Meta:
        model = InstructorModel
        interfaces = (Node,)


class CourseReport(MongoengineObjectType):
    class Meta:
        model = CourseReportModel
        interfaces = (Node,)


class Term(MongoengineObjectType):
    class Meta:
        model = TermModel
        interfaces = (Node,)


class StudentTerm(MongoengineObjectType):
    class Meta:
        model = StudentTermModel
        interfaces = (Node,)


class Student(MongoengineObjectType):
    class Meta:
        model = StudentModel
        interfaces = (Node,)
