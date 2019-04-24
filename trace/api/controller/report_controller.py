import flask
from flask import request, jsonify, Response, json

from trace.api.controller import api
from trace.api.service.report_service import get_all_courses, get_single_course, get_single_report
from trace.api.utils.constants import DEFAULT_PAGE_SIZE


@api.route('course')
def get_courses():
        """
        List many courses
        """
        query = request.args.get('q', '', str)
        page = request.args.get('page', 1, int)
        page_size = request.args.get('pageSize', DEFAULT_PAGE_SIZE, int)
        order_by = request.args.get('orderBy', 'id', str)
        # if query:
            # results = search_course_reports(query, page, page_size)
        # else:
        # TODO: Implement Searching
        results = get_all_courses(page, page_size, order_by)

        # jsonify made this slow :(
        return Response(json.dumps({"data": results}), mimetype='application/json'), 200


@api.route('course/<int:report_id>')
def get_course(report_id):
        """
        Get a course given its identifier
        """
        report = get_single_course(report_id)
        if not report:
            flask.abort(404)
        else:
            return jsonify(report), 200


@api.route('report/<int:report_id>/scores')
def get_scores(report_id):
        """
        Get a report and scores given its identifier
        """
        report = get_single_report(report_id)
        if not report:
            flask.abort(404)
        else:
            # Avoiding jsonify because it can be slow
            return Response(json.dumps(report), mimetype='application/json'), 200
