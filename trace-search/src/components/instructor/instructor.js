import React from "react";

class Instructor extends React.Component {
    render() {
        const items = this.props.data.listInstructors.items;

        return items.map((instructor) => {
            return (
                <div>
                    <h3>{ instructor.lastName }, { instructor.firstName }</h3>
                </div>
            )
        })
    }
}

export default Instructor;