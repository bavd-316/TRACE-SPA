import React from "react";

class Term extends React.Component {
    render() {
        const items = this.props.data.listTerms.items;

        return items.map((term) => {
            return (
                <div>
                    <h3>{ term.semester } { term.year }</h3>
                </div>
            )
        })
    }
}
export default Term;