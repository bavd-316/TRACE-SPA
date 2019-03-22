// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = `subscription OnCreateQuestion(
  $id: ID
  $qid: ID
  $abbrev: String
  $text: String
  $strongly_agree: Int
) {
  onCreateQuestion(
    id: $id
    qid: $qid
    abbrev: $abbrev
    text: $text
    strongly_agree: $strongly_agree
  ) {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion(
  $id: ID
  $qid: ID
  $abbrev: String
  $text: String
  $strongly_agree: Int
) {
  onUpdateQuestion(
    id: $id
    qid: $qid
    abbrev: $abbrev
    text: $text
    strongly_agree: $strongly_agree
  ) {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion(
  $id: ID
  $qid: ID
  $abbrev: String
  $text: String
  $strongly_agree: Int
) {
  onDeleteQuestion(
    id: $id
    qid: $qid
    abbrev: $abbrev
    text: $text
    strongly_agree: $strongly_agree
  ) {
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
export const onCreateInstructor = `subscription OnCreateInstructor(
  $id: ID
  $firstName: String
  $middleName: String
  $lastName: Int
) {
  onCreateInstructor(
    id: $id
    firstName: $firstName
    middleName: $middleName
    lastName: $lastName
  ) {
    id
    firstName
    middleName
    lastName
  }
}
`;
export const onUpdateInstructor = `subscription OnUpdateInstructor(
  $id: ID
  $firstName: String
  $middleName: String
  $lastName: Int
) {
  onUpdateInstructor(
    id: $id
    firstName: $firstName
    middleName: $middleName
    lastName: $lastName
  ) {
    id
    firstName
    middleName
    lastName
  }
}
`;
export const onDeleteInstructor = `subscription OnDeleteInstructor(
  $id: ID
  $firstName: String
  $middleName: String
  $lastName: Int
) {
  onDeleteInstructor(
    id: $id
    firstName: $firstName
    middleName: $middleName
    lastName: $lastName
  ) {
    id
    firstName
    middleName
    lastName
  }
}
`;
export const onCreateCourseReport = `subscription OnCreateCourseReport(
  $id: ID
  $crn: Int
  $name: String
  $subject: String
  $num: Int
) {
  onCreateCourseReport(
    id: $id
    crn: $crn
    name: $name
    subject: $subject
    num: $num
  ) {
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
export const onUpdateCourseReport = `subscription OnUpdateCourseReport(
  $id: ID
  $crn: Int
  $name: String
  $subject: String
  $num: Int
) {
  onUpdateCourseReport(
    id: $id
    crn: $crn
    name: $name
    subject: $subject
    num: $num
  ) {
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
export const onDeleteCourseReport = `subscription OnDeleteCourseReport(
  $id: ID
  $crn: Int
  $name: String
  $subject: String
  $num: Int
) {
  onDeleteCourseReport(
    id: $id
    crn: $crn
    name: $name
    subject: $subject
    num: $num
  ) {
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
export const onCreateTerm = `subscription OnCreateTerm(
  $id: ID
  $master: Boolean
  $year: Int
  $semester: String
) {
  onCreateTerm(id: $id, master: $master, year: $year, semester: $semester) {
    id
    master
    year
    semester
  }
}
`;
export const onUpdateTerm = `subscription OnUpdateTerm(
  $id: ID
  $master: Boolean
  $year: Int
  $semester: String
) {
  onUpdateTerm(id: $id, master: $master, year: $year, semester: $semester) {
    id
    master
    year
    semester
  }
}
`;
export const onDeleteTerm = `subscription OnDeleteTerm(
  $id: ID
  $master: Boolean
  $year: Int
  $semester: String
) {
  onDeleteTerm(id: $id, master: $master, year: $year, semester: $semester) {
    id
    master
    year
    semester
  }
}
`;
export const onCreateStudent = `subscription OnCreateStudent(
  $id: ID
  $firstName: String
  $lastName: String
  $email: AWSEmail
  $nuid: Int
) {
  onCreateStudent(
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    nuid: $nuid
  ) {
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
export const onUpdateStudent = `subscription OnUpdateStudent(
  $id: ID
  $firstName: String
  $lastName: String
  $email: String
  $nuid: Int
) {
  onUpdateStudent(
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    nuid: $nuid
  ) {
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
export const onDeleteStudent = `subscription OnDeleteStudent(
  $id: ID
  $firstName: String
  $lastName: String
  $email: AWSEmail
  $nuid: Int
) {
  onDeleteStudent(
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    nuid: $nuid
  ) {
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
