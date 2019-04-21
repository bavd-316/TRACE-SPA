import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType

from database.term import ModelTerm


class Term(SQLAlchemyObjectType):
    """Term Node"""

    class Meta:
        model = ModelTerm
        interfaces = (graphene.relay.Node,)
