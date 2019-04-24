from graphene_sqlalchemy import SQLAlchemyObjectType
from database.base import db_session
from database.instructor import ModelInstructor
import graphene
import utils

class InstructorAttribute:
    firstname = graphene.String(description="Instructor's first name.")
    lastname = graphene.String(description="Instructors's last name.")
    middlename = graphene.String(description="Instructor's middle name.")

class Instructor(SQLAlchemyObjectType):
    """Instructor Node"""

    class Meta:
        model = ModelInstructor
        interfaces = (graphene.relay.Node,)