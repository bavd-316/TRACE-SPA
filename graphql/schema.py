import graphene
import schemas

class Query(schemas.InstructorQuery, schemas.TermQuery, schemas.CourseQuery, graphene.ObjectType):
    """Nodes which can be queried by this API"""

    node = graphene.relay.Node.Field()



class Mutation(graphene.ObjectType):
    """Mutations which can be performed by this API"""
    pass


schema = graphene.Schema(query=Query,
                         types=[schemas.Term,
                                             schemas.Instructor,
                                             schemas.Course,
                                             schemas.ScoreData,
                                             schemas.Question,
                                             schemas.Answer])
