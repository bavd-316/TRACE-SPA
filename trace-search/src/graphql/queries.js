// eslint-disable
// this is an auto generated file. This will be overwritten

export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    qid
    abbrev
    text
    strongly_agree
    agree
    neutral
    disagree
    strongly_disagree
    dont
    count
    rate
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: TableQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      qid
      abbrev
      text
      strongly_agree
      agree
      neutral
      disagree
      strongly_disagree
      dont
      count
      rate
    }
    nextToken
  }
}
`;
export const getInstructor = `query GetInstructor($id: ID!) {
  getInstructor(id: $id) {
    id
    firstName
    middleName
    lastName
  }
}
`;
export const listInstructors = `query ListInstructors(
  $filter: TableInstructorFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      middleName
      lastName
    }
    nextToken
  }
}
`;
export const queryInstructorsByLastnameIndex = `query QueryInstructorsByLastnameIndex(
  $lastName: Int!
  $first: Int
  $after: String
) {
  queryInstructorsByLastnameIndex(
    lastName: $lastName
    first: $first
    after: $after
  ) {
    items {
      id
      firstName
      middleName
      lastName
    }
    nextToken
  }
}
`;
export const getCourseReport = `query GetCourseReport($id: ID!) {
  getCourseReport(id: $id) {
    id
    crn
    name
    subject
    num
    section
    enrollment
    declines
    responses
    instructor {
      id
      firstName
      middleName
      lastName
    }
    data {
      id
      qid
      abbrev
      text
      strongly_agree
      agree
      neutral
      disagree
      strongly_disagree
      dont
      count
      rate
    }
  }
}
`;
export const listCourseReports = `query ListCourseReports(
  $filter: TableCourseReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      crn
      name
      subject
      num
      section
      enrollment
      declines
      responses
    }
    nextToken
  }
}
`;
export const getTerm = `query GetTerm($id: ID!) {
  getTerm(id: $id) {
    id
    master
    year
    semester
  }
}
`;
export const listTerms = `query ListTerms(
  $filter: TableTermFilterInput
  $limit: Int
  $nextToken: String
) {
  listTerms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      master
      year
      semester
    }
    nextToken
  }
}
`;
export const getStudent = `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    firstName
    lastName
    email
    nuid
    terms {
      id
      master
      year
      semester
    }
  }
}
`;
export const listStudents = `query ListStudents(
  $filter: TableStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      nuid
    }
    nextToken
  }
}
`;
