import graphene
from graphene_sqlalchemy import SQLAlchemyConnectionField

import schemas
from database.instructor import ModelInstructor


class Query(graphene.ObjectType):
    """Nodes which can be queried by this API"""

    node = graphene.relay.Node.Field()

    # Instructor
    getInstructor = graphene.relay.Node.Field(schemas.Instructor)
    instructorList = SQLAlchemyConnectionField(schemas.Instructor)
    searchInstructors = graphene.List(schemas.Instructor, firstName=graphene.String(),
                                      lastName=graphene.String())

    def resolve_searchInstructors(_, info, firstName="", lastName=""):
        query = schemas.Instructor.get_query(info)
        instructors = query.filter((ModelInstructor.first_name.contains(firstName)) &
                                   (ModelInstructor.last_name.contains(lastName)))
        return instructors

    # Term
    getTerm = graphene.relay.Node.Field((schemas.Term))
    termList = SQLAlchemyConnectionField(schemas.Term)


class Mutation(graphene.ObjectType):
    """Mutations which can be performed by this API"""
    pass


schema = graphene.Schema(query=Query, types=[schemas.Term, schemas.Instructor])
