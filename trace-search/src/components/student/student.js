import React from "react";

class Student extends React.Component {
    render() {
        const items = this.props.data.listStudents.items;

        return items.map((student) => {
            return (
                <div>
                    <h3>{ student.firstName } { student.lastName }</h3>
                    <p>{ student.email }</p>
                    <p>{ student.nuid }</p>
                </div>
            )
        })
    }
}
export default Student;