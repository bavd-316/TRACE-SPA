from graphene_sqlalchemy import SQLAlchemyObjectType
from database.base import db_session
from database.term import ModelTerm
import graphene
import utils

class TermAttribute:
    title = graphene.String(description="Term title")

class Term(SQLAlchemyObjectType):
    """Term Node"""

    class Meta:
        model = ModelTerm
        interfaces = (graphene.relay.Node,)