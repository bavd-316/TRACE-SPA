import React from 'react';
import {Query} from "react-apollo";
import { listStudents } from "../../graphql/queries";
import gql from 'graphql-tag';
import Student from './student';

class DisplayStudents extends React.Component {

    render() {
        return (
            <div className="students">
                <Query query={gql( listStudents )}>
                    {({ loading, data, error }) => {

                        if (loading) return <p>loading...</p>;
                        if (error) return <p>{error.message}</p>;

                        return <Student data={data}/>
                    }}
                </Query>
            </div>
        )
    }
}

export default DisplayStudents;