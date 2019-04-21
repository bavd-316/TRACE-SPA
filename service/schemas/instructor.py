import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType

from database.instructor import ModelInstructor


class Instructor(SQLAlchemyObjectType):
    """Instructor Node"""

    class Meta:
        model = ModelInstructor
        interfaces = (graphene.relay.Node,)

