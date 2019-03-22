import React from "react";

class CourseReport extends React.Component {
    render() {
        const courseReport = this.props.data.getCourseReport;
        const courseData = courseReport.data;
        const courseDataList = courseData.map((data) => {
            return (
                <li>
                    <div>
                        <h3>Report Data</h3>
                        <p>{courseReport.text}</p>
                        <p>{courseReport.strongly_agree}</p>
                        <p>{courseReport.agree}</p>
                        <p>{courseReport.neutral}</p>
                        <p>{courseReport.disagree}</p>
                        <p>{courseReport.strongly_disagree}</p>
                        <p>{courseReport.dont}</p>
                    </div>
                </li>
            )
        });


        return (
            <div>
                <h2>{courseReport.name}</h2>
                <p>{courseReport.crn}</p>
                <p>{courseReport.subject}</p>
                <p>{courseReport.num}</p>
                <p>{courseReport.section}</p>
                <div>
                    <p>{courseReport.enrollment}</p>
                    <p>{courseReport.declines}</p>
                    <p>{courseReport.responses}</p>
                    <p>{courseReport.rate}</p>
                </div>
                <div>
                    <h3>Instructor</h3>
                    <p>{courseReport.firstName}</p>
                    <p>{courseReport.lastName}</p>
                </div>
                <ul>{courseDataList}</ul>
            </div>
        )
    }
}

export default CourseReport;