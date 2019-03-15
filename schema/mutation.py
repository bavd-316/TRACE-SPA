from schema import (
    Instructor
)
from pipeline.models import (
    Instructor as InstructorModel
)
import graphene
import logging

log = logging.getLogger(__name__)


class CreateInstructor(graphene.Mutation):
    class Input:
        first_name = graphene.String()
        middle_name = graphene.String()
        last_name = graphene.String()

    ok = graphene.Boolean()
    instructor = graphene.Field(lambda: Instructor)

    def mutate(self, info, first_name, last_name, middle_name=None):
        try:
            instructor = InstructorModel(first_name=first_name,
                                         middle_name=middle_name,
                                         last_name=last_name)
            instructor.save()
            ok = True
        except Exception as e:
            log.exception("Unable to create Instructor", e)
            instructor = None
            ok = False
        finally:
            return CreateInstructor(instructor=instructor, ok=ok)
