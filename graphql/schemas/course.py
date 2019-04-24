import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from promise import Promise
from promise.dataloader import DataLoader
from sqlalchemy.orm import joinedload, noload

from database.answer import ModelAnswer
from database.course import ModelCourse
from database.instructor import ModelInstructor
from database.lookup_answertext import ModelAnswerText
from database.lookup_questiontext import ModelQuestionText
from database.question import ModelQuestion
from database.score_data import ModelScoreData
from database.term import ModelTerm
from .instructor import Instructor


class InstructorLoader(DataLoader):
    def batch_load_fn(self, keys):
        print(f"Finding Instructors with Value {', '.join(keys)}")
        return Promise.resolve(ModelInstructor.query.filter(ModelInstructor.id.in_(keys)).all())


class TermLoader(DataLoader):
    def batch_load_fn(self, keys):
        print(f"Finding Terms with Value {', '.join(keys)}")
        return Promise.resolve(
            [t[0] for t in ModelTerm.query.filter(ModelTerm.id.in_(keys)).with_entities(ModelTerm.title).all()])


class QuestionLoader(DataLoader):
    def batch_load_fn(self, keys):
        print(f'Finding Questions with IDs: {", ".join(keys)}')
        return Promise.resolve(
            ModelQuestion.query.filter(ModelQuestion.id.in_(keys)).all()
        )

class AnswerLoader(DataLoader):
    def batch_load_fn(self, keys):
        print(f'Finding Answers with IDs: {", ".join(keys)}')
        return Promise.resolve(
            ModelAnswer.query.filter(ModelAnswer.id.in_(keys)).all()
        )

class AnswerTextLoader(DataLoader):
    def batch_load_fn(self, keys):
        return Promise.resolve(
            [at[0] for at in ModelAnswerText.query.filter(ModelAnswerText.id.in_(keys)).with_entities(ModelAnswerText.text).all()]
        )

instructor_loader = InstructorLoader()
term_loader = TermLoader()
question_loader = QuestionLoader()
answer_loader = AnswerLoader()
answer_text_loader = AnswerTextLoader()

class Course(SQLAlchemyObjectType):
    class Meta:
        model = ModelCourse
        interfaces = (graphene.relay.Node,)
        exclude_fields = ('course_id', 'instructor_id', 'term_id', 'term', 'instructor')

    instructor = graphene.Field(Instructor)
    term = graphene.String()

    def resolve_term(self, info):
        return term_loader.load(str(self.term_id))

    def resolve_instructor(self, info):
        return instructor_loader.load(str(self.instructor_id))


class AnswerText(SQLAlchemyObjectType):
    class Meta:
        model = ModelAnswerText
        interfaces = (graphene.relay.Node,)


class QuestionText(SQLAlchemyObjectType):
    class Meta:
        model = ModelQuestionText
        interfaces = (graphene.relay.Node,)


class Answer(SQLAlchemyObjectType):
    class Meta:
        model = ModelAnswer
        exclude_fields = ('lookup_answertext', 'answer_text_id')

    answer = graphene.String()

    def resolve_answer(self, info):
        return answer_text_loader.load(self.answer_text_id)


class Question(SQLAlchemyObjectType):
    class Meta:
        model = ModelQuestion
        interfaces = (graphene.relay.Node,)
        exclude_fields = ('score_data', 'question_text_id')

    # question = graphene.String()
    def resolve_answers(self, info):
        return answer_loader.load_many([str(a[0]) for a in ModelAnswer.query.filter_by(question_id=self.id).with_entities(ModelAnswer.id).all()])

    # def resolve_question(self, info):
    #     return self.lookup_text.text


class ScoreData(SQLAlchemyObjectType):
    class Meta:
        model = ModelScoreData
        interfaces = (graphene.relay.Node,)
        exclude_fields = ('report_id')

    def resolve_questions(self, info):
        return question_loader.load_many([str(q[0]) for q in ModelQuestion.query.filter_by(data_id=self.id).options(noload(ModelQuestion.answers)).with_entities(ModelQuestion.id).all()])


class CourseQuery(graphene.ObjectType):
    courseList = SQLAlchemyConnectionField(Course)
    getCourse = graphene.relay.Node.Field(Course)
