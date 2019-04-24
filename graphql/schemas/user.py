from graphene_sqlalchemy import SQLAlchemyObjectType
from database.base import db_session
from database.user import ModelUser
import graphene
import utils

class UserAttribute:
    email = graphene.String(description="User's Northeastern email address.")
    student_id = graphene.Int(description="User's Northeastern student id.")

class User(SQLAlchemyObjectType):
    """User Node"""

    class Meta:
        model = ModelUser
        interfaces = (graphene.relay.Node,)