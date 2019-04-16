import React from 'react';
import {Query} from "react-apollo";
import { listInstructors } from "../../graphql/queries";
import gql from 'graphql-tag';
import Instructor from './instructor';

class DisplayInstructors extends React.Component {

    render() {
        return (
            <div className="instructors">
                <Query query={gql(listInstructors)}>
                    {({ loading, data, error }) => {

                        if (loading) return <p>loading...</p>;
                        if (error) return <p>{error.message}</p>;

                        return <Instructor data={data}/>
                    }}
                </Query>
            </div>
        )
    }
}

export default DisplayInstructors;