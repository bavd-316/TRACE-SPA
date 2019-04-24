import graphene
from graphene_sqlalchemy import SQLAlchemyConnectionField
from graphene_sqlalchemy import SQLAlchemyObjectType

from database.instructor import ModelInstructor


class Instructor(SQLAlchemyObjectType):

    class Meta:
        model = ModelInstructor
        interfaces = (graphene.relay.Node,)


class InstructorQuery(graphene.ObjectType):

    getInstructor = graphene.relay.Node.Field(Instructor)
    instructorList = SQLAlchemyConnectionField(Instructor)
    searchInstructors = graphene.List(Instructor, firstName=graphene.String(),
                                      lastName=graphene.String())

    def resolve_searchInstructors(_, info, firstName="", lastName=""):
        query = Instructor.get_query(info)
        instructors = query.filter((ModelInstructor.first_name.contains(firstName)) &
                                   (ModelInstructor.last_name.contains(lastName)))
        return instructors
