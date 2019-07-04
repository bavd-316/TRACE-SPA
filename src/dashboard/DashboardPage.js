import React from 'react';
import CourseListing from '../common/CourseListing';
import styles from './DashboardPage.css';

const CourseBox = (props) => {
  return (
    <div className={styles.coursebox}>
      <div>
        <h1>{props.id}</h1>
        <h2>{props.title}</h2>
        <h2>{props.instructor}</h2>
      </div>
      <hr/>
        <div className={styles.metadata}>
          <p>Status:<span>{props.status}</span></p>
          <p>Period:<span>{props.period}</span></p>
        </div>
      <hr/>
    </div>
  )
}

const InfoBox = (props) => {
  return (
    <div className={styles.infobox}>
      <h2>{props.title}</h2>
      <hr/>
        <div className={styles.infocontent}>
          {props.content}
        </div>
      <hr/>
    </div>
  )
}

const DashboardPage = () => {
  const temp = {
    id: 'CS3500',
    title: 'Object-Oriented Design',
    instructor: 'Ben Lerner',
    status: 'Upcomming',
    period: 'Spring 2019'
  }

  const temp2 = {
    title: 'Title InfoBox',
    content: ''
  }


  const traceInfo = {
    title: 'What is Trace?',
    content:  <p>
                <span style={{color: '#b61924'}}>TRACE</span> is a course evaluation
                tool that is administered through a collaboration with the
                <span style={{color: '#b61924'}}>Office of the Registrar</span> and
                the <span style={{color: '#b61924'}}>Office of the Provost</span>.
                All TRACE submissions are confidential and anonymous upon
                submission to protect the students. Reports are also locked in
                once submitted and the submission period ends before final grades
                are released to prevent bias against the instructor. TRACE
                submissions are important for improving both the instructor's
                performance and the student's course decision making process.
              </p>
  }


  const results = [
    {
      id: 4869,
      instructor: 'D. BELANGER',
      label: 'MICROBES AND SOCIETY',
      num: 'BIOL 1141',
      term: 'SUMMER 1 2018'
    },
    {
      id: 4869,
      instructor: 'D. BELANGER',
      label: 'MICROBES AND SOCIETY',
      num: 'BIOL 1141',
      term: 'SUMMER 1 2018'
    },
    {
      id: 4869,
      instructor: 'D. BELANGER',
      label: 'MICROBES AND SOCIETY',
      num: 'BIOL 1141',
      term: 'SUMMER 1 2018'
    },
    {
      id: 4869,
      instructor: 'D. BELANGER',
      label: 'MICROBES AND SOCIETY',
      num: 'BIOL 1141',
      term: 'SUMMER 1 2018'
    },
  ]

  const reportInfo = {
    title: 'Recently Viewed Reports',
    content: results.map((result, ind) => (
      <div className={styles.course}>
        <CourseListing
          key={`course-listing-${ind}`}
          course={result}
          history={null}
        />
      </div>
    ))
  }


  return (
    <div className={styles.grid}>
        {CourseBox(temp)}
        {CourseBox(temp)}
        {CourseBox(temp)}
        {CourseBox(temp)}
        {InfoBox(traceInfo)}
        {InfoBox(reportInfo)}
    </div>
  )
}

export default DashboardPage;
