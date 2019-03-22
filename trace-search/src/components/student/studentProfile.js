import React from "react";

class StudentProfile extends React.Component {
    render() {
        const studentProfile = this.props.data.getStudent;
        const terms = studentProfile.terms;
        const listedTerms = terms.map((term) => {
            return (
                <li>
                    <h4>{term.semester} {term.year}</h4>
                </li>
            )
        });


        return (
            <div>
                <h3>{studentProfile.firstName} {studentProfile.lastName}</h3>
                <p>{studentProfile.nuid}</p>
                <ul>{listedTerms}</ul>
            </div>
        )
    }
}

export default StudentProfile;