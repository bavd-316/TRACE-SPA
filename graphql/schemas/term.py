import graphene
from graphene_sqlalchemy import SQLAlchemyConnectionField
from graphene_sqlalchemy import SQLAlchemyObjectType

from database.term import ModelTerm


class Term(SQLAlchemyObjectType):

    class Meta:
        model = ModelTerm
        interfaces = (graphene.relay.Node,)


class TermQuery(graphene.ObjectType):

    getTerm = graphene.relay.Node.Field((Term))
    termList = SQLAlchemyConnectionField(Term)
