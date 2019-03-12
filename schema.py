import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from models import (
    InstructorModel, TermModel, DataModel, StatsModel, ReportModel,
    SemesterModel, RoleModel, UserModel
)


class Data(MongoengineObjectType):
    class Meta:
        model = DataModel
        interfaces = (Node,)


class Instructor(MongoengineObjectType):
    class Meta:
        model = InstructorModel
        interfaces = (Node,)


class Term(MongoengineObjectType):
    class Meta:
        model = TermModel
        interfaces = (Node,)


class Stats(MongoengineObjectType):
    class Meta:
        model = StatsModel
        interfaces = (Node,)


class Semester(MongoengineObjectType):
    class Meta:
        model = SemesterModel
        interfaces = (Node,)


class Data(MongoengineObjectType):
    class Meta:
        model = DataModel
        interfaces = (Node,)


class Role(MongoengineObjectType):
    class Meta:
        model = RoleModel
        interfaces = (Node,)


class Report(MongoengineObjectType):
    class Meta:
        model = ReportModel
        interfaces = (Node,)


class User(MongoengineObjectType):
    class Meta:
        model = UserModel
        interfaces = (Node,)


class Query(graphene.ObjectType):
    node = Node.Field()
    all_reports = MongoengineConnectionField(Report)
    all_users = MongoengineConnectionField(User)
    all_data = MongoengineConnectionField(Data)
    data = graphene.Field(Data)
    term = graphene.Field(Term)
    instructor = graphene.Field(Instructor)
    semester = graphene.Field(Semester)


schema = graphene.Schema(query=Query, types=[Report, User, Data,
                                             Instructor, Semester, Term])
