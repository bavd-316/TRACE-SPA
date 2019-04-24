from sqlalchemy.orm import contains_eager
from sqlalchemy_utils import sort_query
from time import time
from trace.api.model.course import Course
from trace.api.model.score_data import ScoreData


def get_all_courses(page, page_size, sort):
    start = time()
    sql_results = sort_query(Course.query.join(Course.term).join(Course.instructor).options(
        contains_eager(Course.term)).options(contains_eager(Course.instructor)), sort).paginate(page, page_size,
                                                                                                False).items
    end = time()
    sql_time = end - start
    start = time()
    final_result = [obj.as_dict() for obj in sql_results]
    end = time()
    dict_time = end - start
    print(f'\nSQL: {sql_time}\nDict: {dict_time}\n')
    return final_result

# TODO: Implement Searching
# def search_course_reports(query, page, page_size):
#     return [Course.as_dict(obj) for obj in Course.search(query, page, page_size)]


def get_single_course(report_id):
    result = Course.query.get(report_id)
    return result.as_dict() if result is not None else result


def get_single_report(report_id):
    start = time()
    report = ScoreData.query.filter_by(report_id=report_id).first()
    end = time()
    sql_time = end - start
    start = time()
    final_result = report.as_dict()
    end = time()
    dict_time = end - start
    print(f'\nSQL: {sql_time}\nDict: {dict_time}\n')
    return final_result
