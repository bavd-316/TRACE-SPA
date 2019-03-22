// eslint-disable
// this is an auto generated file. This will be overwritten

export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
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
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
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
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
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
export const createInstructor = `mutation CreateInstructor($input: CreateInstructorInput!) {
  createInstructor(input: $input) {
    id
    firstName
    middleName
    lastName
  }
}
`;
export const updateInstructor = `mutation UpdateInstructor($input: UpdateInstructorInput!) {
  updateInstructor(input: $input) {
    id
    firstName
    middleName
    lastName
  }
}
`;
export const deleteInstructor = `mutation DeleteInstructor($input: DeleteInstructorInput!) {
  deleteInstructor(input: $input) {
    id
    firstName
    middleName
    lastName
  }
}
`;
export const createCourseReport = `mutation CreateCourseReport($input: CreateCourseReportInput!) {
  createCourseReport(input: $input) {
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
export const updateCourseReport = `mutation UpdateCourseReport($input: UpdateCourseReportInput!) {
  updateCourseReport(input: $input) {
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
export const deleteCourseReport = `mutation DeleteCourseReport($input: DeleteCourseReportInput!) {
  deleteCourseReport(input: $input) {
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
export const createTerm = `mutation CreateTerm($input: CreateTermInput!) {
  createTerm(input: $input) {
    id
    master
    year
    semester
  }
}
`;
export const updateTerm = `mutation UpdateTerm($input: UpdateTermInput!) {
  updateTerm(input: $input) {
    id
    master
    year
    semester
  }
}
`;
export const deleteTerm = `mutation DeleteTerm($input: DeleteTermInput!) {
  deleteTerm(input: $input) {
    id
    master
    year
    semester
  }
}
`;
export const createStudent = `mutation CreateStudent($input: CreateStudentInput!) {
  createStudent(input: $input) {
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
export const updateStudent = `mutation UpdateStudent($input: UpdateStudentInput!) {
  updateStudent(input: $input) {
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
export const deleteStudent = `mutation DeleteStudent($input: DeleteStudentInput!) {
  deleteStudent(input: $input) {
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
