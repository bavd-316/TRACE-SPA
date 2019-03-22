import React from "react";
import { Query } from "react-apollo";
import { listCourseReports } from "../../graphql/queries";
import gql from "graphql-tag";
import Report from "./report";

class DisplayReports extends React.Component {

    render() {
        return (
            <div className="reports">
                <Query query={gql(listCourseReports)}>
                    {({ loading, data, error }) => {

                        if (loading) return <p>loading...</p>
                        if (error) return <p>{error.message}</p>

                        return <Report data={data}/>
                    }}
                </Query>
            </div>
        )
    }
}

export default DisplayReports;