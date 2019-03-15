from graphene.relay import Node
from graphene_mongo.fields import MongoengineConnectionField
from schema.types import (
    Question, Instructor, CourseReport, Term, StudentTerm, Student
)
from schema.mutation import (
    CreateInstructor
)
import graphene


class Query(graphene.ObjectType):
    node = Node.Field()
    all_reports = MongoengineConnectionField(CourseReport)
    all_students = MongoengineConnectionField(Student)
    all_instructors = MongoengineConnectionField(Instructor)
    data = graphene.Field(Question)
    term = graphene.Field(Term)
    instructor = graphene.Field(Instructor)


class Mutations(graphene.ObjectType):
    create_instructor = CreateInstructor.Field()


schema = graphene.Schema(query=Query, mutation=Mutations,
                         types=[Question, Instructor, CourseReport,
                                Term, StudentTerm, Student])
