import React from "react";

class Report extends  React.Component {
    render() {
        const items = this.props.data.listCourseReports.items;

        return items.map((report) => {
            return (
                <div>
                    <h2>{ report.name }</h2>
                    <p>{ report.crn }</p>
                    <p>{ report.subject }</p>
                    <p>{ report.num }</p>
                    <p>{ report.section }</p>
                </div>
            )
        })
    }
}

export default Report;