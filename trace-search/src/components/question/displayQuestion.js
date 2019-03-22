import React from 'react';
import {Query} from "react-apollo";
import {listQuestions} from "../../graphql/queries";
import gql from 'graphql-tag';
import Question from './question';

class DisplayQuestions extends React.Component {

    render() {
        return (
            <div className="questions">
                <Query query={gql(listQuestions)}>
                    {({ loading, data, error }) => {

                        if (loading) return <p>loading...</p>
                        if (error) return <p>{error.message}</p>

                        return <Question data={data}/>
                    }}
                </Query>
            </div>
        )
    }
}

export default DisplayQuestions;