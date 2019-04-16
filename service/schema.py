from graphene_sqlalchemy import SQLAlchemyConnectionField
import graphene
import schemas

class Query(graphene.ObjectType):
    """Nodes which can be queried by this API"""

    node = graphene.relay.Node.Field()

    # User
    user = graphene.relay.Node.Field((schemas.User))
    userList = SQLAlchemyConnectionField(schemas.User)

    # Instructor
    instructor = graphene.relay.Node.Field((schemas.Instructor))
    instructorList = SQLAlchemyConnectionField(schemas.Instructor)

class Mutation(graphene.ObjectType):
    """Mutations which can be performed by this API"""

schema = graphene.Schema(query=Query, mutation=Mutation)