import flask
from flask import request, jsonify

from trace.api.controller import api
from trace.api.service.instructor_service import get_all_instructors, get_single_instructor
from trace.api.utils.constants import DEFAULT_PAGE_SIZE


@api.route('instructor')
def get_instructors():
        """
        List all instructors
        """
        page = request.args.get('page', 1, int)
        page_size = request.args.get('pageSize', DEFAULT_PAGE_SIZE, int)
        order_by = request.args.get('orderBy', 'id', str)
        return jsonify({'data': get_all_instructors(page, page_size, order_by)}), 200


@api.route('instructor/<int:instructor_id>')
def get_instructor(instructor_id):
        """
        Get an instructor given its identifier
        """
        instructor = get_single_instructor(instructor_id)
        if not instructor:
            flask.abort(404)
        else:
            return jsonify(instructor), 200
